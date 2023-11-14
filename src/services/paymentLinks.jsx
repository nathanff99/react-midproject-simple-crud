import api from './api'

const fetchLinks = () => {
  return new Promise((resolve, reject) => {
    api
      .get('payment-links')
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

const getLink = (id) => {
  return new Promise((resolve, reject) => {
    api
      .get(`payment-links/${id}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

const postLink = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .post('payment-links', payload)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

const updateLink = (id, payload) => {
  return new Promise((resolve, reject) => {
    api
      .put(`payment-links/${id}`, payload)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

const deleteLink = (id) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`payment-links/${id}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

export default { fetchLinks, postLink, getLink, updateLink, deleteLink }
