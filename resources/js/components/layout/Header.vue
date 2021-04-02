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
        </v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
    name: "Header",
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
}
</script>
