import { Group } from '../entities'

export default {

    add(group){
        const res = axios.post('..../group',Group(group))
        if ('error' in res) {
            throw new Error(res.error)
        } else {
           console.log("added successfully");

        }
    },
    update(group){
        const res = axios.put('..../group',Group(group))
        if ('error' in res) {
            throw new Error(res.error)
        } else {
           console.log("updated successfully");

        }
    },
    getOne(id) {
        const res = axios.get('...../group/' + id)

        if ('error' in res) {
            throw new Error(res.error)
        } else {
            return new Group(res.data)
        }
    },

    getList() {
        const res = axios.get('...../group')

        if ('error' in res) {
            throw new Error(res.error)
        } else {
            return res.data.map(group => new Group(group))
        }
    },
    delete(id){
        const res = axios.delete('..../group'+id)
        if ('error' in res) {
            throw new Error(res.error)
        } else {
           console.log("deleted successfully");

        }
    },

}