<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="title" label="Title" hint="Post Title" required />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-textarea v-model="body" label="Body" hint="Post Body" required />
                </v-col>
            </v-row>
            <v-row>
                <v-btn color="primary" @click='addPost({ title, body, user_id })'>Add Post</v-btn>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "BlogForm",
    data() {
        return {
            title: '',
            body: '',
            user_id: 1,
        }
    },
    methods: {
        ...mapActions('blog', ['addPost'])
    }
}
</script>
