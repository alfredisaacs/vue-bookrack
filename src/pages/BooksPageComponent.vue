<script setup>
    import { ref } from 'vue';
    import BooksComponent from '../components/bookComponents/BooksComponent.vue'
    import CreateBookComponent from '../components/bookComponents/CreateBookComponent.vue'

    let componentKey = ref(0);

    const reloadComponent = () => {
        componentKey.value += 1;
    }
</script>

<template>
    <h1 class="section__title">Books</h1>
    <BooksComponent :key="componentKey" />
    <CreateBookComponent @updater="reloadComponent" />
</template>