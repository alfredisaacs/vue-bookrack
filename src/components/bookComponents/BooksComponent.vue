<script setup>
    import { onMounted, ref } from 'vue'
    import StarRating from 'vue-star-rating'
    import { getBooksAction } from '../../stores/actions'
    import { useUserStore } from '../../stores/states/userStore'

    const userStore = useUserStore()

    const userId = userStore.id

    console.log('userId', userId)
  
    const books = ref([])
    onMounted(async () => {
        const querySnapshot = await getBooksAction(userId)
        querySnapshot.forEach((doc) => {
            books.value.push({ ...doc.data(), id: doc.id })
        })
    })

</script>

<template>
    <div>
        <div v-for="book in books" :key="book.id" class="books">
            <div class="book">
                <div class="book__img">{{ book.image }}</div>
            </div>
            <div class="book__info">
                <h2 class="book__title">{{ book.title }}</h2>
                <p class="book__item">{{ book.author }}, {{ book.year }}</p>
                <p class="book__item">{{ book.read ? 'Read' : 'Not read' }}</p>
                <div class="book__item">Rating: <star-rating v-model:rating="book.rating"></star-rating></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .book {
        display: flex;
        &__img {
            border: 1px solid black;
            height: 100px;
            overflow: hidden;
            width: 100px;
        }
    }
</style>