export class Course {
    constructor(props = {}) {
        this.id = props.id
        this.code = props.code
        this.name = props.name
        this.desc = props.desc || ''
        this.courseRepresentative= props.courseRepresentative
        this.groups = props.groups
        this.professors=props.professors
    }   
}