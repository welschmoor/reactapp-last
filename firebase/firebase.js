// npm i firebase@8.5.0
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import { firebaseConfig } from "./firebaseConfig"

// this is necessary to avoid the app to be initialized more than once
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const firestore = firebase.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const timestamp = firebase.firestore.Timestamp
const serverTimeStamp = firebase.firestore.FieldValue.serverTimestamp()
const increment = firebase.firestore.FieldValue.increment // to increment likes for example

export { firestore, auth, timestamp, storage, googleProvider, serverTimeStamp, increment }