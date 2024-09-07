import axiosInstance from "./axiosInstance";

const doctorservice = {
    create: async (payload) => {
        try {
            console.log(payload)
            const response = await axiosInstance.post('/doctors/create', payload)
            console.log(response)
            return response.data
        }
        catch (error) {
            throw error.response.data
        }
    },

    fetchAll: async (payload) => {
        try {
            const response = await axiosInstance.get('doctors/all', payload)
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
    update: async (id, payload) => {
        try {
            const response = await axiosInstance.put(`/doctors/update/${id}`, payload);
            return response.data
        } catch (error) {
            throw error.response.data
        }
    },
    delete: async (id) => {
        try {
            const response = await axiosInstance.delete(`/doctors/delete/${id}`)
            return response.data
        } catch (error) {
            throw error.response.data
        }
    },
}
export default doctorservice