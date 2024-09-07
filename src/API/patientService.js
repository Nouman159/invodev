import axiosInstance from "./axiosInstance";

const patientService = {
    create: async (payload) => {
        try {
            console.log(payload)
            const response = await axiosInstance.post('/patients/create', payload)
            console.log(response)
            return response.data
        }
        catch (error) {
            throw error.response.data
        }
    },
    Signin: async (payload) => {
        try {
            console.log(payload)
            const response = await axiosInstance.post('/patients/signin', payload)
            console.log(response)
            return response.data
        }
        catch (error) {
            throw error.response.data
        }
    },

    fetchAll: async () => {
        try {
            // console.log(payload)
            const response = await axiosInstance.get('/patients/all')
            console.log(response)
            return response.data
        }
        catch (error) {
            throw error.response.data
        }
    },
    single: async (id) => {
        try {
            const response = await axiosInstance.get(`/doctors/single/${id}`);
            return response.data
        } catch (error) {
            throw error.response.data
        }
    },







}
export default patientService