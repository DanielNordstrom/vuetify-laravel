<template>
    <main>
        <h1>
            <span>Blog Posts ({{ getPostCount }})</span>
            <BlogForm :post="editPost" />
        </h1>

        <v-container>
            <v-row dense>
                <v-col v-for="(post, index) in posts" :key="index" cols="6">
                        <BlogItem :post="post" />
                </v-col>
            </v-row>
        </v-container>
    </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import BlogItem from '@components/blog/Item'
import BlogForm from '@components/blog/Form'

export default {
    name: "BlogList",
    components: {
        BlogItem,
        BlogForm,
    },
    data() {
        return {
            editPost: {
                title: 'Prop Title',
                body: 'Prop body',
            },
        }
    },
    mounted() {
        this.loadPosts()
    },
    computed: {
        ...mapState("blog", ["posts"]),
        ...mapGetters("blog", ["getPostCount"]),
    },
    methods: {
        ...mapActions("blog", ["loadPosts"]),
    },
}
</script>

<style scoped>
</style>
