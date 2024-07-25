import { collection, getDocs, doc, setDoc, Firestore } from 'firebase/firestore'

// Função para garantir que uma coleção exista
async function ensureCollectionExists(db: Firestore, collectionPath: string) {
  const collectionRef = collection(db, collectionPath)
  const querySnapshot = await getDocs(collectionRef)
  if (querySnapshot.empty) {
    console.log(`Collection ${collectionPath} does not exist. Creating...`)
    // Criando um documento dummy para garantir que a coleção exista
    await setDoc(doc(collectionRef, 'dummy-doc'), { exists: true })
  }
}
