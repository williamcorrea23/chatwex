import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { getDocs, setDoc, doc, collection, getFirestore } from 'firebase/firestore'

import AdminControls from '@/components/AdminControls'
import ChatInput from '@/components/ChatInput'
import ChatMembersBadges from '@/components/ChatMembersBadges'
import ChatMessages from '@/components/ChatMessages'
import { sortedMessagesRef } from '@/lib/converters/Message'
import { chatMembersRef } from '@/lib/converters/ChatMembers'
import { authOptions } from '@/auth'

type Props = { params: { chatId: string } }

async function ensureCollectionExists(collectionRef) {
  const querySnapshot = await getDocs(collectionRef)
  if (querySnapshot.empty) {
    console.log(`Collection ${collectionRef.id} does not exist. Creating...`)
    await setDoc(doc(collectionRef, 'dummy-doc'), { exists: true })
  }
}

async function ChatPage({ params: { chatId } }: Props) {
  const session = await getServerSession(authOptions)
  if (!session) {
    console.error('Session is undefined')
    redirect('/login')
    return
  }

  const db = getFirestore()
  const messagesCollectionRef = sortedMessagesRef(chatId)
  const membersCollectionRef = chatMembersRef(chatId)

  // Ensure the collections exist
  try {
    await ensureCollectionExists(messagesCollectionRef)
    await ensureCollectionExists(membersCollectionRef)
  } catch (error) {
    console.error('Error ensuring collections exist:', error);
  }

  const initialMessages = (await getDocs(messagesCollectionRef)).docs.map(
    doc => doc.data()
  )

  const hasAccess = (await getDocs(membersCollectionRef)).docs
    .map(doc => doc.id)
    .includes(session.user.id!)

  if (!hasAccess) {
    redirect('/chat?error=permission')
  }

  return (
    <>
      <AdminControls chatId={chatId} />
      <ChatMembersBadges chatId={chatId} />

      <div className="flex-1">
        <ChatMessages
          chatId={chatId}
          session={session}
          initialMessages={initialMessages}
        />
      </div>
      <ChatInput chatId={chatId} />
    </>
  )
}

export default ChatPage
