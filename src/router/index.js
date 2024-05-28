// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pokemon from '../views/Pokemon.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import UserList from '../views/GestionarCredenciales/UserList.vue'
import LID from '../views/GestionarInspectoresDisponibles/ListarInspectoresDisponibles.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ListarPersonal',
    name: 'ListarPersonal',
    component: ListarPersonal

  },
  {
    path: '/LID',
    name: 'ListarInpectoresDisponibles',
    component: LID
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'pokemon',
        name: 'Pokemon',
        component: Pokemon
      },
      {
        path: 'users',
        name: 'UserList',
        component: UserList, // Ruta para la lista de usuarios
        meta: {
          requiresAdmin: true // Agregar metadatos para verificar el acceso de administrador
        }
      }
    ],
    beforeEnter: (to, from, next) => {
      const loggedIn = localStorage.getItem('loggedIn')
      if (loggedIn) {
        next()
      } else {
        next('/login')
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
