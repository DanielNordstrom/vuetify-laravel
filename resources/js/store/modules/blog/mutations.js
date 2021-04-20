export default {
    ADD_POST(state, payload) {
        state.posts.push(payload)
    },
    REMOVE_POST(state, id) {
        let index = state.posts.findIndex(e => e.id == id)
        state.posts.splice(index, 1)
    },
    LOAD_POSTS(state, payload) {
        state.posts = payload
    }
}
