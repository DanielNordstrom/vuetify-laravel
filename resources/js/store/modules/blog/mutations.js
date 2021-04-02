export default {
    ADD_POST(state, payload) {
        state.posts.push(payload)
    },
    REMOVE_POST(state, payload) {
        state.posts.splice(payload.index, 1)
    },
    LOAD_POSTS(state, payload) {
        state.posts = payload
    }
}
