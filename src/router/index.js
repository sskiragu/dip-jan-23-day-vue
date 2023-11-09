import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SignupView from '../views/SignupView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactsView from '../views/ContactsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/login',
      name: 'login',
      // component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    }
  ]
})

export default router
