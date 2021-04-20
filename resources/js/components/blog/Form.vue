<template>
    <v-form>
        <v-chip
            class="mr-2"
            @click="toggleForm"
            color="primary"
            outlined
        >
            <v-icon left>mdi-plus</v-icon>
            <span v-if="!visible">Add New Post</span>
            <span v-if="visible">Hide Form</span>
        </v-chip>

        <v-overlay :value="visible" :absolute="absolute">
            <v-container>
                <v-card width="500" v-click-outside="toggleForm">
                    <v-card-title>Add New Post</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="title" label="Title" hint="Post Title" required />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea v-model="body" label="Body" hint="Post Body" required />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <span>User ID:</span><span>{{ user_id }}</span>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click='addPost({ title, body, user_id }) && toggleForm()'>Add Post</v-btn>
                        <v-btn color="danger" @click='toggleForm'>Cancel</v-btn>
                    </v-card-actions>
                </v-card>
                <v-spacer />
            </v-container>
        </v-overlay>
    </v-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "BlogForm",
    props: ['post'],
    data() {
        return {
            visible: false,
            absolute: true,
            title: this.post && this.post.title || '',
            body: this.post && this.post.body || '',
            user_id: 1,
        }
    },
    methods: {
        ...mapActions('blog', ['addPost']),
        toggleForm() {
            this.visible = !this.visible
        },
    },
}
</script>
