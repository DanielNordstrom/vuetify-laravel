<template>
    <v-app-bar app color="blue darken-2" dense dark>
        <v-app-bar-nav-icon />
        <v-toolbar-title>
            Danger Zone
        </v-toolbar-title>

            <v-spacer />

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon v-if="name">mdi-logout</v-icon>
                <v-icon v-else>mdi-login</v-icon>
            </v-btn>

            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="n in 5" :key="n" @click="menuClick(n)">
                        <v-list-item-title>
                            Option {{ n }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
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
    },
    methods: {
        menuClick(id) {
            console.log("Click - Menu Item: ", id)
        }
    }
}
</script>
