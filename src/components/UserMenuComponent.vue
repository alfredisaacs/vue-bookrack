<script setup>
import { ref, watch } from "vue";
import { useUserStore } from "../stores/states/userStore"
import { logoutAction } from "../stores/actions/index"

    const userStore = useUserStore();
    const user = ref({
        isLogged: userStore.isLogged,
        user: userStore.email
    })

    const showLogin = () => {
+        userStore.showLogin()
    }

    const logOutUser = () => {
        logoutAction()
        .then(() => {
            userStore.logOut()
        })
    }

    watch(() => userStore.isLogged, (newValue) => {
        user.value.isLogged = newValue
        user.value.user = userStore.email
    });

</script>
<template>
    <div class="user__menu">
    <div class="user__menu-list">
        <div v-if="user.isLogged">
            <ul class="user__data flex gap-5 mt-3">
                <li class="mt-5">Hi, <span class="user__data-name mr-5 font-bold">{{  user.user }}</span>|</li>
                <li class="user__menu-item mt-5">
                    <button @click="logOutUser">Sign out</button>
                </li>
                <li class="user__data-item w-16 h-16 overflow-hidden rounded-full border border-rose-900">
                    <img class="w-auto" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt="user" />
                </li>
            </ul>
        </div>
        <button v-else class="btn mt-6" @click="showLogin">Get started</button>
   </div>
</div>
</template>