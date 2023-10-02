import axios from "axios";


axios.defaults.baseURL = 'https://drf-app-bwnc-b8e3842a0fb7.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true