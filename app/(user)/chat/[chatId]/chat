import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { getDocs } from 'firebase/firestore'

import AdminControls from '@/components/AdminControls'
import ChatInput from '@/components/ChatInput'
import ChatMembersBadges from '@/components/ChatMembersBadges'
import ChatMessages from '@/components/ChatMessages'
import { sortedMessagesRef } from '@/lib/converters/Message'
import { chatMembersRef } from '@/lib/converters/ChatMembers'
import { authOptions } from '@/auth'
import { ensureCollectionExists } from '@/utils/firestoreUtils'

type Props = { params: { chatId: string } }

async function ChatPage({ params: { chatId } }: Props) {
  const session = await getServerSession(authOptions)
  if (!session?.user) redirect('/api/auth/signin')

  // Garantindo que as coleções existam
  await ensureCollectionExists(db, `chats/${chatId}/messages`)
  await ensureCollectionExists(db, `chats/${chatId}/members`)

  const messages = await getDocs(sortedMessagesRef(chatId))
  const members = await getDocs(chatMembersRef(chatId))
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
