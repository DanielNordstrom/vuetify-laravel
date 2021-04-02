import { post } from "jquery"

export default {
    getPostCount: state => state.posts.length,
    getNextId: state => {
        return Math.max(...state.posts.map(post => post.id)) + 1
    }
}
