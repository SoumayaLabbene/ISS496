export class User {
    constructor(props = {}) {
        this.id = props.id
        this.firstName = props.firstName
        this.lastName = props.lastName
        this.email = props.email 
        this.password= props.password 
        this.phone = props.phone
        this.userStatus=props.userStatus
        this.role=props.role
    }   
}