<template>
    <div class="login__container fixed z-20 bg-white w-96 h-96">
        <div class="login__close absolute right-1.5 top-1.5">
            <button class="btn py-1 px-3 rounded-full bg-red-950 text-white" @click="closeLogin">X</button>
        </div>
        <div class="login__form mt-5">
            <h2 class="login__title text-3xl font-bold mb-5">Login</h2>
            <form @submit.prevent="handleLogin">
                <div class="form__group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" class="input" v-model="email">
                </div>
                <div class="form__group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" class="input" v-model="password">
                </div>
                <div class="form__group">
                    <button type="submit" class="btn mx-auto">Login</button>
                </div>
            </form>
        </div>
        <div>Not registered? <button>Register here</button></div>
    </div>
    <div class="fixed w-full h-full z-10 inset-0 bg-white opacity-60" @click="closeLogin"></div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../../stores/states/userStore'
import { loginAction } from '../../stores/actions/index'

const email = ref('')
const password = ref('')
const userStore = useUserStore()

const closeLogin = () => {
    userStore.closeLogin()
}
const handleLogin = async () => {
    try {
        await loginAction(email.value, password.value)
        .then((result) => {
            const logged = result.uid.length > 0
            const email = result.email
            userStore.logUser(logged, email, result.uid)
        })
        .then(() => {
            closeLogin()
        })
    } catch (error) {   
        console.error('Error al iniciar sesión:', error.message);
    }
}
</script>

<style lang="scss" scoped>
    .login__container {
        border: 1px solid black;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        left: calc(50% - 12rem);
        padding: 2rem;
    }
</style>