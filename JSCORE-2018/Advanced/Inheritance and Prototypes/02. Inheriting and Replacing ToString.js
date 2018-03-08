class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email)
        this.subject = subject;
    }

    toString() {
        let base = super.toString().slice(0, -1)
        return base + `, subject: ${this.subject})`
    }
}

class Student extends Person {
    constructor(name, email, course) {
        super(name, email)
        this.course = course;
    }

    toString() {
        let base = super.toString().slice(0, -1)
        return base + `, course: ${this.course})`
    }
}


let person = new Person('Pavel', 'pavelperov93@gmail.com')
console.log(person.toString());

let teacher = new Teacher('Viktor Kostadinov', 'vk@yahoo.com', 'JavaScript')
console.log(teacher.toString());

let student = new Student('Someone', 'sm@yahoo.com', 'C#')
console.log(student.toString());