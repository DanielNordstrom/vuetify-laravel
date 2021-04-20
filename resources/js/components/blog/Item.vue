<template>
    <v-card elevation="2" outlined>
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-subtitle>Blog Post #{{ post.id }}</v-card-subtitle>
        <v-card-text>{{ post.body }}</v-card-text>
        <v-card-actions>
            <v-btn color="danger white--text" @click='removePost(post.id)'>Remove</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "BlogItem",
    props: ['post'],
    methods: {
        ...mapActions("blog", ["removePost"]),
    },

}
</script>

<style scoped>
</style>
