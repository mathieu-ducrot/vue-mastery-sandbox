// https://github.com/axios/axios
import axios from 'axios'

const apiClient = axios.create({
  // https://github.com/typicode/json-server
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

/* NProgress example implementation with interceptors. We actually don't want that because of two caveats :
 * Not optimal for multiple API calls at the same time (possible solution https://medium.com/@LoCascioNick/create-a-global-loading-progress-indicator-using-vuex-axios-and-nprogress-20451b33145a)
 * Templates get rendered before the API call is returned
 */
// import NProgress from 'nprogress'
// apiClient.interceptors.request.use(config => {
//   NProgress.start()
//   return config
// })
//
// apiClient.interceptors.response.use(response => {
//   NProgress.done()
//   return response
// })

export default {
  // Pagination based on json-server behavior https://github.com/typicode/json-server#paginate
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
