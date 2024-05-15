<script setup>
    import HeaderMenuComponent from './HeaderMenuComponent.vue';
    import UserMenuComponent from './UserMenuComponent.vue';
</script>

<template>
    <header class="header flex max-w-7xl my-0 mx-auto red justify-between">
        <router-link to="/" class="header__logo-link">
            <h1 class='header__logo flex'>
                <img src="../assets/bookrack.png" class="header__logo-image w-20 relative z-10" alt="Bookrack" />
                <span
                    class="nunito-600
                    text-white
                    h-fit p-2
                    text-xl
                    tracking-[-2px]
                    mt-6
                    ml-2
                    pl-[40px]
                    z-0
                    relative
                    pr-[20px]
                    left-[-45px]
                    bg-black"
                >
                    BOOKRACK
                </span>
            </h1>
        </router-link>
            <HeaderMenuComponent />
            <UserMenuComponent />
    </header>
</template>