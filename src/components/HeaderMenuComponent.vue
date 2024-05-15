<template>
    <div class="header__menu">
            <ul class="header__menu-list flex mt-8">
                <li class="header__menu-item">
                    <RouterLink to="/" class="lnk">Home</RouterLink>
                </li>
                <li v-if="user.isLogged" class="header__menu-item">
                    <RouterLink to="/books" class="lnk">Books</RouterLink>
                </li>
                <li v-if="user.isLogged" class="header__menu-item">
                    <RouterLink to="/authors" class="lnk">Authors</RouterLink>
                </li>
                <li class="header__menu-item">
                    <RouterLink to="/about" class="lnk">About</RouterLink>
                </li>
                <li class="header__menu-item">
                    <RouterLink to="/contact" class="lnk">Contact</RouterLink>
                </li>
            </ul>
        </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useUserStore } from "../stores/states/userStore";

const userStore = useUserStore();
    const user = ref({
        isLogged: ''
    })

    watch(() => userStore.isLogged, (newValue) => {
        user.value.isLogged = newValue
    });
</script>