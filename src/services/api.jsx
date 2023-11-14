import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_CRUD_API_URL
})

export default api
