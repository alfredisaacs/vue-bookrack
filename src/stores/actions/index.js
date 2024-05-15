import { loginService, logOutService } from "../services/authService"
import { getBooks, getBook, addBook, updateBook, deleteBook, getMyBooks } from "../services/booksService"

export const getBooksAction = async (id) => {
    const books = await getMyBooks(id)
    return books
}

export const getBookAction = async (id) => {
    const book = await getBook(id)
    return book
}

export const addBookAction = async (book) => {
    const newBook = await addBook(book)
    return newBook
}

export const updateBookAction = async (id, book) => {
    const updatedBook = await updateBook(id, book)
    return updatedBook
}

export const deleteBookAction = async (id) => {
    const deletedBook = await deleteBook(id)
    return deletedBook
}

export const loginAction = async (email, password) => {
    const user = await loginService(email, password)
    if(user) {
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user))
    }
    return user
}

export const logoutAction = async () => {
    localStorage.removeItem('user')
    return  await logOutService()
}

export const createUserAction = async (email, password) => {
    return await loginService(email, password)
}
