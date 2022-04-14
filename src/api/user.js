import { User } from '../entities'

export default {

    add(user){
        const res = axios.post('..../user',User(user))
        if ('error' in res) {
            throw new Error(res.error)
        } else {
           console.log("added successfully");

        }
    },
    update(user){
        const res = axios.put('..../user',User(user))
        if ('error' in res) {
            throw new Error(res.error)
        } else {
           console.log("updated successfully");

        }
    },
    getOne(id) {
        const res = axios.get('...../user/' + id)

        if ('error' in res) {
            throw new Error(res.error)
        } else {
            return new User(res.data)
        }
    },

    getList() {
        const res = axios.get('...../user')

        if ('error' in res) {
            throw new Error(res.error)
        } else {
            return res.data.map(term => new User(user))
        }
    },
    delete(id){
        const res = axios.delete('..../user'+id)
        if ('error' in res) {
            throw new Error(res.error)
        } else {
           console.log("deleted successfully");

        }
    },
    login(email,pwd){
        const res = axios.post('..../user/auth',email,pwd)
        if ('error' in res) {
            throw new Error(res.error)
        } else {
           console.log("logged in successfully");

        }
    },
    logout(){
        const res = axios.get('..../user/auth')
        if ('error' in res) {
            throw new Error(res.error)
        } else {
           console.log("logged out successfully");

        }
    },
}