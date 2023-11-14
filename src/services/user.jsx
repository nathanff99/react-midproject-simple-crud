import api from './api'

const login = (username, password) => {
  return new Promise((resolve, reject) => {
    api
      .get('users/1')
      .then((response) => {
        if (
          response.data.username === username &&
          response.data.password === password
        ) {
          resolve(response.data)
        } else {
          resolve(false)
        }
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

export default { login }
