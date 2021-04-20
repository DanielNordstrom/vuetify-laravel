/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@store'
import api from '@services/api'

import vuetify from "@plugins/vuetify.js";

Vue.use(VueRouter)

import App              from '@components/App'
import DashboardPage    from '@pages/DashboardPage'
import LoginPage        from '@pages/LoginPage'
import Login            from '@components/login'
import RegisterPage     from '@pages/RegisterPage'
import TestPage         from '@pages/TestPage'
import BlogPage         from '@pages/BlogPage'

// TODO: Move this to a router file
const ifNotAuthenticated = (to, from, next) => {
    console.log('isAuthenticated: ', store.getters.isAuthenticated)
    if (!store.getters.isAuthenticated) {
        next();
        return;
    }
    next("/");
};

  const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return;
    }
    next("/login");
  };

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'board',
            component: DashboardPage,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/login',
            name: 'login',
//            component: LoginPage,
            component: Login,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterPage,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/test',
            name: 'test',
            component: TestPage,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogPage,
            beforeEnter: ifAuthenticated
        },
    ],
})

Vue.prototype.$http = api;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: { App },
    vuetify,
    store,
    router
});
