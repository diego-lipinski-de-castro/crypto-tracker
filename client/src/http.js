import axios from 'axios'

const api = axios.create({
  baseURL: 'https://crypto-tracker-dc.firebaseio.com',
  timeout: 3000
})

export default api