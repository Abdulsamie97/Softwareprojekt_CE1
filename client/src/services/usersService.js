import Api from '@/services/Api'

export default{
  index (search) {
    return Api().get('ShowAllUsers', {
      params: {
        search: search
      }
    })
  },
  show (userId) {
    return Api().get(`ShowAllUsers/${userId}`)
  },
  post (user) {
    return Api().post('ShowAllUsers', user)
  },
  put (user) {
    return Api().put(`ShowAllUsers/${user.id}`, user)
  }
}
