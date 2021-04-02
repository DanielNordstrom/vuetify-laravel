import axios from 'axios'

const api = axios.create({
    baseURL: process.env.APP_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

api.defaults.timeout = 10000;

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('jwt')
        if (token) {
            config.headers.common['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    response => {
        if (response.status === 200 || response.status === 201) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 400:
                    // do something
                    break

                case 401:
                    alert('expired')
                    break

                case 403:
                    router.replace({
                        path: "/login",
                        query: { redirect: router.currentRoute.fullPath }
                    })
                    break

                case 404:
                    alert('page does not exist')
                    break

                case 502:
                    setTimeout(() => {
                        router.replace({
                            path: "./login",
                            query: { redirect: router.currentRoute.fullPath }
                        })
                    }, 1000)
                    break

                default:
                    alert('unhandled status: ' + error.response.status)
                    console.log(error)
                    break
            }
            return Promise.reject(error.response)
        }
    }
)


export default api
