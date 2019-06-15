import axios from 'axios'

const ERR_OK = 0

export function get(url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then(response => {
      const { errno, data } = response.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}