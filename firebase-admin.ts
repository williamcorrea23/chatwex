import admin from 'firebase-admin'
import { initFirestore } from '@auth/firebase-adapter'

let app

  if (!admin.apps.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "elearning-568mbq",
      clientEmail: "firebase-adminsdk-ufs3h@elearning-568mbq.iam.gserviceaccount.com",
      privateKey: "76551a5cea1b20db844eefb235750a8c0dff8683", //process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  })
}

const adminDB = initFirestore({
  credential: admin.credential.cert({
 projectId: "elearning-568mbq",
    clientEmail: "firebase-adminsdk-ufs3h@elearning-568mbq.iam.gserviceaccount.com",
    privateKey: "76551a5cea1b20db844eefb235750a8c0dff8683",//process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
})

const adminAuth = admin.auth(app)

export { adminDB, adminAuth }
