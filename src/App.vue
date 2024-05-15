<script setup>
import { onMounted } from 'vue'
import { useUserStore } from './stores/states/userStore'
import HeaderComponent from './components/HeaderComponent.vue'

const userStore = useUserStore();

onMounted(() => {
    const savedUserJSON = localStorage.getItem('user');
    if (savedUserJSON) {
        const savedUser = JSON.parse(savedUserJSON);
        const logged = savedUser.uid.length > 0;
        const email = savedUser.email;
        userStore.logUser(logged, email, savedUser.uid);
    }
})
</script>

<template>
  <HeaderComponent />
  <div class="mainContainer">
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
