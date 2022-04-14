import { Course } from '../entities'

export default {

    add(course){
        const res = axios.post('..../course',Course(course))
        if ('error' in res) {
            throw new Error(res.error)
        } else {
           console.log("added successfully");

        }
    },
    update(course){
        const res = axios.put('..../course',Course(course))
        if ('error' in res) {
            throw new Error(res.error)
        } else {
           console.log("updated successfully");

        }
    },
    getOne(id) {
        const res = axios.get('...../course/' + id)

        if ('error' in res) {
            throw new Error(res.error)
        } else {
            return new Course(res.data)
        }
    },

    getList() {
        const res = axios.get('...../course')

        if ('error' in res) {
            throw new Error(res.error)
        } else {
            return res.data.map(course => new Course(course))
        }
    },
    delete(id){
        const res = axios.delete('..../course'+id)
        if ('error' in res) {
            throw new Error(res.error)
        } else {
           console.log("deleted successfully");

        }
    },

}