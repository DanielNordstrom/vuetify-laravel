/* eslint-disable promise/param-names */

// TODO: Add types file
const AUTH_REQUEST = 'AUTH_REQUEST'
const AUTH_ERROR = 'AUTH_ERROR'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const AUTH_LOGOUT = 'AUTH_LOGOUT'
const USER_REQUEST = 'USER_REQUEST'

//import apiCall from "utils/api";
import api from '@services/api'

const state = {
    token: localStorage.getItem("user-token") || "",
    status: "",
    hasLoadedOnce: false
};

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
};

const actions = {
    [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST);
            api.post("/api/login", user)
                .then(resp => resp.data)
                .then(data => {
                    localStorage.setItem("user-token", data.token);
                    // Here set the header of your ajax library to the token value.
                    // example with axios
                    // axios.defaults.headers.common['Authorization'] = data.token
                    commit(AUTH_SUCCESS, data);
                    //TODO: Implement dispatch(USER_REQUEST);
                    resolve(data);
                })
                .catch(err => {
                    commit(AUTH_ERROR, err);
                    localStorage.removeItem("user-token");
                    reject(err);
                });
            });
    },
    [AUTH_LOGOUT]: ({ commit }) => {
        return new Promise(resolve => {
            commit(AUTH_LOGOUT);
            localStorage.removeItem("user-token");
            resolve();
        });
    }
};

const mutations = {
    [AUTH_REQUEST]: state => {
        state.status = "loading";
    },
    [AUTH_SUCCESS]: (state, resp) => {
        state.status = "success";
        state.token = resp.token;
        state.hasLoadedOnce = true;
    },
    [AUTH_ERROR]: state => {
        state.status = "error";
        state.hasLoadedOnce = true;
    },
    [AUTH_LOGOUT]: state => {
        state.token = "";
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
