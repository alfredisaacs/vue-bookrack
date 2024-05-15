import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export const loginService = async (email, password) => {
    try {
        const userLogin = await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            return userCredential.user;
        })
        return userLogin
    } catch (error) {
        console.log('Error', error.message)
        return { error: error }
    }
};

export const logOutService = async () => {
    await auth.signOut()
    return
}