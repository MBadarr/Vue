import Login from "@/views/authentication/Login.vue";
import { createRouter, createWebHistory } from 'vue-router';



const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "Register" */ '@/views/authentication/Register.vue')
    }
  },
  {
    path: '/',
    name: 'Todo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "Todo" */ '@/views/todoList/TodoList.vue')
      //return import(/* webpackChunkName: "Register" */ '@/views/home/index.vue')

    },

  }, {
    path: '/createtodo',
    name: 'CreateTodo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "Todo" */ '@/views/createTodo/CreateTodo.vue')
      //return import(/* webpackChunkName: "Register" */ '@/views/home/index.vue')

    }
  },
  {
    path: '/edittodo',
    name: 'editeTodo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "Todo" */ '@/views/Editscreen/Editscreen.vue')
      //return import(/* webpackChunkName: "Register" */ '@/views/home/index.vue')

    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
