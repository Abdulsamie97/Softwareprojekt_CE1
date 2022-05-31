import Api from '@/services/Api'

// created AuthenticationService which allows to call a register method on it
// which will simply post whatever that we pass into
export default{
  register (credentials) {
    return Api().post('register', credentials)
  }
}
