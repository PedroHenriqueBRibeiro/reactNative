import axios from 'axios';

const API_KEY = 'AIzaSyD1R97t5nRJEhzcSe92iPmMEdTWIjgV7DU' ;
const URL_API = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY;

const authenticate = async (mode, email, password) => {
  try {
      const response = await axios.post(`${URL_API}${mode}?key=${API_KEY}`, {
          email: email,
          password: password,
          returnSecureToken: true
      })
      console.log(response.data)
      return response.data.idToken
  } catch(err) {
      console.log(err)
  }
}

export const createUser = async (email, password) => {
  const token = await authenticate("signUp", email, password)
  return token
}
export const login = async (email, password) => {
  const token = await authenticate("signInWithPassword", email, password)
  return token
}