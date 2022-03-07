// firebase 8.5
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import { firebaseConfig } from "./firebaseConfig"

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const timestamp = firebase.firestore.Timestamp

export { firestore, auth, timestamp, storage }