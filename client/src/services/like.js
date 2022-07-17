import Api from '@/services/Api'

export default{
    index(search) {
        return Api().get('likes'),{
            params:{
                search: search
            }
        }
    },
    show(userId) {
        return Api().get('likes/${userId}')
    },
    post(user) {
        return Api().post('likes', user)
    },
    put(user) {
        return Api().put('likes/${user.id}', user)
    }
}
