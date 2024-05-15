import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDOwXbQHGt9PZV8iWgf_ghkzUqkN-Eavqg",
  authDomain: "bookrack-e4c13.firebaseapp.com",
  projectId: "bookrack-e4c13",
  storageBucket: "bookrack-e4c13.appspot.com",
  messagingSenderId: "836175141107",
  appId: "1:836175141107:web:6efe567b61c45dd6a47f86"
}

export const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)