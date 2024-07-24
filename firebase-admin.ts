import admin from 'firebase-admin'
import { initFirestore } from '@auth/firebase-adapter'

let app

if (!admin.apps.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "elearning-568mbq",
      clientEmail: "firebase-adminsdk-ufs3h@elearning-568mbq.iam.gserviceaccount.com",
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  })
}

const adminDB = initFirestore({
  credential: admin.credential.cert({
 projectId: "elearning-568mbq",
    clientEmail: "firebase-adminsdk-ufs3h@elearning-568mbq.iam.gserviceaccount.com",
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
})

const adminAuth = admin.auth(app)

export { adminDB, adminAuth }
