import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomePageComponent.vue'
import BooksView from './pages/BooksPageComponent.vue'
import AuthorsView from './pages/AuthorsPageComponent.vue'
import AboutView from './pages/AboutPageComponent.vue'
import ContactView from './pages/ContactPageComponent.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/books', component: BooksView },
  { path: '/authors', component: AuthorsView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router