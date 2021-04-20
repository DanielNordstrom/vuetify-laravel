import Vue from 'vue'
import Vuex from 'vuex'
import blog from '@modules/blog'
import auth from '@modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        blog,
        auth,
    },
})
