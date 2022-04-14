import { Term } from '../entities'

export default {

    add(term){
        const res = axios.post('..../term',Term(term))
        if ('error' in res) {
            throw new Error(res.error)
        } else {
           console.log("added successfully");

        }
    },
    update(term){
        const res = axios.put('..../term',Term(term))
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
        const res = axios.get('...../term')

        if ('error' in res) {
            throw new Error(res.error)
        } else {
            return res.data.map(term => new Term(term))
        }
    },
    delete(id){
        const res = axios.delete('..../term'+id)
        if ('error' in res) {
            throw new Error(res.error)
        } else {
           console.log("deleted successfully");

        }
    },

}