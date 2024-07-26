
var admin = require("firebase-admin");
	import { initializeApp } from "firebase/app";

const  production  ={
    projectId:   process.env.FIREBASE_PROJECT_ID,
    privateKey:  process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
} ;



admin.initializeApp({
  credential: admin.credential.cert(production)
});

const adminDB= admin.firestore();
const adminAuth= admin.auth();


export { adminDB, adminAuth }
