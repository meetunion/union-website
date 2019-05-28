import axios from 'axios'

const api = axios.create({
  baseURL:
    process.env.VUE_APP_CORE_URL !== undefined
      ? process.env.VUE_APP_CORE_URL
      : 'http://localhost:3000/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no'
  }
})

export default api
