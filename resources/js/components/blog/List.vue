<template>
    <main>
        <h1>
            <span>Blog Posts ({{ getPostCount }})</span>
            <v-chip
                class="mr-2"
                @click="toggleForm"
                color="primary"
                outlined
            >
                <v-icon left>mdi-plus</v-icon>
                <span v-if="!isFormVisible">Add New Post</span>
                <span v-if="isFormVisible">Hide Form</span>
            </v-chip>
        </h1>
        <BlogForm v-if="isFormVisible" />

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
            isFormVisible: false,
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
        toggleForm() {
            this.isFormVisible = !this.isFormVisible
        }
    },
}
</script>

<style scoped>
</style>
