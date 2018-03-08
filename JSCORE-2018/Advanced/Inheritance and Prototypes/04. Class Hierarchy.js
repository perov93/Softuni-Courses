function solve() {
    class Figure{
        constructor(){
            if(new.target === Figure){
                throw  new TypeError('Invalid type')
            }
        }
    }

    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius = radius;
        }

        get area(){
            return Math.PI * this.radius * this.radius
        }

        toString(){
            return `Circle - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure{
        constructor(width, height){
            super();
            this.width = width;
            this.height = height;
        }

        get area(){
            return this.width * this.height;
        }

        toString(){
            return `Rectangle - width: ${this.width}, height: ${this.height}`
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}

let ci = new Circle(5);
console.log(ci.toString());
console.log(ci.area);

let rec = new Rectangle(3, 4);
console.log(rec.toString());
console.log(rec.area);
