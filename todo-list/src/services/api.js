import axios from 'axios'

const api = axios.create({
  baseURL: "https://todo-list-senac-rn-default-rtdb.firebaseio.com/"
})

export default api

// C - POST
// R - GET all
// R - GET - id
// U - PUT - id {data}
// D - DELETE - id