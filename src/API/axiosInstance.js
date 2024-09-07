import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://17.17.2.179:5000/invodev-api",
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (config.data instanceof FormData) {
            config.headers['Content-Type'] = 'multiple/form-data';

        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.status === 401) {

        }
        return Promise.reject(error);
    }
)

export default axiosInstance