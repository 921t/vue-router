import axios from 'axios'

const client = axios.create({
    baseURL: '/api'
});

export default {
    all() {
        return client.get('/api/users')
    },
    find(id) {
        return client.get(`/api/users/${id}`)
    },
    update(id, data) {
        return client.put(`/api/users/${id}`, data)
    },
    delete(id) {
        return client.delete(`/api/users/${id}`)
    }
}