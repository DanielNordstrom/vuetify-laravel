<template>
    <v-app>
        <Nav />

        <Header />

        <!-- Sizes your content based upon application components -->
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>

        <Footer />
    </v-app>
</template>


<script>
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import Nav    from '@components/layout/Nav'

export default {
    name: "App",
    components: {
        Header,
        Footer,
        Nav,
    },
}
</script>
