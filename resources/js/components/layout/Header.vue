<template>
    <v-app-bar app color="blue darken-2">
        <v-toolbar-title class="headline text-uppercase white--text">
            <span class="font-weight-bold">Vuetify &nbsp;</span>
            <span class="font-weight-light">MATERIAL DESIGN</span>
            <v-spacer />
            <v-btn
                class="white--text"
                text
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
            >
                <span class="mr-2">Latest Release</span>
            </v-btn>
            <li v-if="isAuthenticated" @click="logout">
                <span class="logout">Logout</span>
            </li>
            <li v-if="!isAuthenticated && !authLoading">
                <router-link to="/login">Login</router-link>
            </li>
        </v-toolbar-title>
    </v-app-bar>
</template>

<script>
const AUTH_LOGOUT = 'AUTH_LOGOUT'

import { mapState, mapGetters } from 'vuex'

export default {
    name: "Header",
    methods: {
        logout: function() {
            this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/login"));
        }
    },
    computed: {
        ...mapGetters("auth", ["getProfile", "isAuthenticated", "isProfileLoaded"]),
        ...mapState({
            authLoading: state => state.auth.status === "loading",
            name: state => `${state.user.profile.title} ${state.user.profile.name}`
        })
    }
    /*
    data(){
        return {
            isLoggedIn : null,
            name : null
        }
    },
    mounted(){
        this.isLoggedIn = localStorage.getItem('jwt')
        this.name = localStorage.getItem('user')
    }
    */
}
</script>
