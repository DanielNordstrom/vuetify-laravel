import api from '@services/api'

export default {
    addPost({ commit }, data) {
        return new Promise(resolve => {
            setTimeout(() => {
                let post = api.post('/api/post/', data).then(response => {
                    commit('ADD_POST', response.data.data)
                    resolve()
                })
            }, 250)
        })
    },
    removePost({ commit }, id) {
        return new Promise(resolve => {
            setTimeout(() => {
                api.delete(`/api/post/${id}`).then(response => {
                    commit('REMOVE_POST', id)
                    resolve()
                })
            }, 250)
        })
    },
    loadPosts({ commit }) {
        return new Promise(resolve => {
            setTimeout(() => {
                let posts = api.get('/api/post/').then(response => {
                    commit('LOAD_POSTS', response.data)
                    resolve()
                })
            }, 250)
        })
    },
}
