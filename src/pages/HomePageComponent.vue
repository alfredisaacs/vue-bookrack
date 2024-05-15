<script setup>
    import { onMounted, ref, watch } from 'vue'
    import { useUserStore } from '../stores/states/userStore'
    import MainBannerComponent from '../components/homeComponents/MainBannerComponent.vue'
    import LoginComponent from '../components/homeComponents/LogInComponent.vue'

    const userStore = useUserStore()
    let showLogin = ref(false)

    onMounted(() => {
        showLogin.value = userStore.show
    })

    watch(() => userStore.show, (newValue) => {
        showLogin.value = newValue
    })

</script>

<template>
    <div v-if="showLogin" class="login">
        <LoginComponent />
    </div>
    <MainBannerComponent />
</template>