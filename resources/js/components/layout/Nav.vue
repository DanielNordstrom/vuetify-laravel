<template>
    <v-navigation-drawer app permanent expand-on-hover mini-variant>
        <v-list>
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="title">
                        Vuetify Testing
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Stuff will break
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider />

        <v-list dense nav>
            <v-list-item v-for="item in navItems" :key="item.id" :to="item.url">
                <v-list-item-icon>
                    <v-icon :color="item.color">{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>


<script>
export default {
    name: "Nav",
    data() {
        return {
            navItems: [
                {
                    id: 1,
                    title: "Dashboard",
                    icon: "mdi-view-dashboard",
                    url: "/",
                    color: "blue",
                },
                {
                    id: 2,
                    title: "Blog",
                    icon: "mdi-post",
                    url: "/blog",
                    color: "green",
                },
                {
                    id: 3,
                    title: "Test Area",
                    icon: "mdi-test-tube",
                    url: "/test",
                    color: "danger"
                },
            ]
        }
    }

}
</script>
