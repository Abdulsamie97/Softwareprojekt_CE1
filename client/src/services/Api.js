import axios from 'axios'

// created api which returns an axios object that points to a certain url
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
