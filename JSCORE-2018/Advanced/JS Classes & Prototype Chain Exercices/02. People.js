function solve() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error("Cannot instantiate directly")
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            //Todo cycle task
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            //Todo get paid
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(this.name + ' is working on a simple task. ')
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(this.name + ' is working on a complicated task.')
            this.tasks.push(this.name + ' is taking time off work.')
            this.tasks.push(this.name + ' is supervising junior workers.')
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(this.name + ' scheduled a meeting. ')
            this.tasks.push(this.name + ' is preparing a quarterly report.')
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

let result = solve();

let junior = new result.Junior('Ivan', 20)
let senior = new result.Senior('Pavel', 25)
let manager = new result.Manager('Peter', 24)

console.log(junior.salary = 2);
console.log(junior);
console.log(senior);
console.log(manager);