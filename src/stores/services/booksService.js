import { getFirestore, collection, getDocs, getDoc, addDoc, query, where, doc, updateDoc } from "firebase/firestore"
import { firebaseApp } from "../../firebase"

const db = getFirestore(firebaseApp)

export const getMyBooks = async (user) => {
    const querySnapshot = collection(db, "book")
    console.log(user)
    const filter = query(querySnapshot, where('user', '==', user))
    const consult = getDocs(filter)

    return consult
}

export const getBooks = async () => {
    const querySnapshot = await getDocs(collection(db, "book"))
    return querySnapshot
}

export const getBook = async (id) => {
    const docRef = doc(db, "book", id)
    const docSnap = await getDoc(docRef)
    return docSnap
}

export const addBook = async (book) => {
    const docRef = await addDoc(collection(db, "book"), book)
    return docRef
}

export const updateBook = async (id, book) => {
    const docRef = doc(db, "book", id)
    const docSnap = await getDoc(docRef)
    await updateDoc(docRef, book)
    return docSnap
}

export const deleteBook = async (id) => {
    const docRef = doc(db, "book", id)
    const docSnap = await getDoc(docRef)
    await deleteDoc(docRef)
    return docSnap
}