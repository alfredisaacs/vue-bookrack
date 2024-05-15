<script setup>
    import { ref, nextTick, onMounted } from 'vue'
    import StarRating from 'vue-star-rating'
    import { addBookAction } from '../../stores/actions'
    import { genres, languages, countries } from '../../utils/constants'
    import { useUserStore } from '../../stores/states/userStore'

    const userStore = useUserStore()

    const userId = userStore.id;

    const title = ref('')
    const author = ref('')
    const country = ref('')
    const description = ref('')
    const image = ref('')
    const genre = ref('')
    const status = ref('')  
    const rating = ref(0)
    const pages = ref('')
    const year = ref('')
    const language = ref('')
    const publisher = ref('')
    const ISBN = ref(0)
    const condition = ref('')
    const notes = ref('')

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    const emit = defineEmits(['updater'])

    const emitUpdate = () => {
        emit('updater')
    }

    const createBook = async () => {
    try {
        await addBookAction({
            title: title.value,
            author: author.value,
            country: country.value,
            description: description.value,
            image: image.value,
            genre: genre.value,
            status: status.value,
            rating: rating.value,
            pages: pages.value,
            year: year.value,
            language: language.value,
            publisher: publisher.value,
            ISBN: ISBN.value,
            condition: condition.value,
            notes: notes.value,
            user: userId
        })
            await nextTick()
            emitUpdate()
        } catch (error) {
            console.error(error)
        }
    }

</script>
<template>
    <div class="create__book">
        <div class="create__book-form">
            <form @submit.prevent="createBook">
                <div class="form__group">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" v-model="title">
                </div>
                <div class="form__group">
                    <label for="author">Author</label>
                    <input type="text" name="author" id="author" v-model="author">
                </div>
                <div class="form__group">
                    <label for="country">Country</label>
                    <select id="country" name="country" v-model="country">
                        <option disabled value="">Please select one</option>
                        <option v-for="country in countries" :key="country.value" :value="country.value">{{ country.name }}</option>
                    </select>
                </div>
                <div class="form__group">
                    <label for="description">Description</label>
                    <textarea name="description" id="description" v-model="description"></textarea>
                </div>
                <div class="form__group">
                    <label for="image">Image</label>
                    <input type="text" name="image" id="image" v-model="image">
                </div>
                <div class="form__group">
                    <label for="genre">Genre</label>
                    <select id="genre" name="genre" v-model="genre">
                        <option disabled value="">Please select one</option>
                        <option v-for="genre in genres" :key="genre.value" :value="genre.value">{{ genre.name }}</option>
                    </select>
                </div>
                <div class="form__group">
                    <label for="status">Status</label>
                    <input type="radio" name="status-read" id="status-read" value="read" v-model="status">
                    <label for="status-read">Read</label>
                    <input type="radio" name="status-unread" id="status-unread" value="unread" v-model="status">
                    <label for="status-unread">Unread</label>
                </div>
                <div class="form__group">
                    <label for="rating">Rating</label>
                    <star-rating v-model:rating="rating"></star-rating>
                </div>
                <div class="form__group">
                    <label for="pages">Pages</label>
                    <input type="number" name="pages" id="pages" v-model="pages" max="3000">
                </div>
                <div class="form__group">
                    <label for="year">Year</label>
                    <input type="number" name="year" id="year" v-model="year" min="1300" :max="currentYear">
                </div>
                <div class="form__group">
                    <label for="language">Language</label>
                    <select id="language" name="language" v-model="language">
                        <option value="">Select a language</option>
                        <option v-for="language in languages" :key="language.value" :value="language.value">{{ language.name }}</option>
                    </select>
                </div>
                <div class="form__group">
                    <label for="publisher">Publisher</label>
                    <input type="text" name="publisher" id="publisher" v-model="publisher">
                </div>
                <div class="form__group">
                    <label for="ISBN">ISBN</label>
                    <input type="number" name="ISBN" id="ISBN" v-model="ISBN">
                </div>
                <div class="form__group">
                    <label for="notes">Notes</label>
                    <textarea type="text" name="notes" id="notes" v-model="notes"></textarea>
                </div>
                <div class="form__group">
                    <button type="submit" class="btn">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>../../utils/constants