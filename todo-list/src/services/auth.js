import axios from 'axios';

const API_KEY = 'AIzaSyD1R97t5nRJEhzcSe92iPmMEdTWIjgV7DU' ;
const URL_API = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY;

export const createUser = async (email, password) => {
  try {
    const response = await axios.post(URL_API, {
      email: email,
      password: password,
      returnSecureToken: true
    })
    console.log(response)
  } catch (err){
    console.log(err)
  }
}


export const login = () => {}