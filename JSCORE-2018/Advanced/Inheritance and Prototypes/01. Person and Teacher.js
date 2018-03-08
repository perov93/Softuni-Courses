function personAndTeacher(){
    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name} email: ${this.email})`
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email)
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher,
    }
}

let person = new Person('Pavel', 'pavelperov93@gmail.com')
console.log(person);