import axiosInstance from "./axiosInstance";

const appointmentService = {
    create: async (payload) => {
        try {
            console.log(payload)
            const response = await axiosInstance.post('/appointment/create', payload)
            console.log(response)
            return response.data
        }
        catch (error) {
            throw error.response.data
        }
    },

    fetchAll: async (payload) => {
        try {
            const response = await axiosInstance.get('appointment/all', payload)
            return response.data
        }
        catch (error) {
            throw error.response.data
        }

    },
    single: async (id) => {
        try {
            const response = await axiosInstance.get(`/appointment/single/${id}`);
            return response.data
        } catch (error) {
            throw error.response.data
        }
    },

}
export default appointmentService