// let currentId = 0;
//
// function getId() {
//     return currentId++
// }
//
// function createRect(width, height) {
//     let rect = {
//         //id: getId(),
//         width: width,
//         height: height,
//         area: () => rect.width * rect.height,
//         compareTo: function (other) {
//             let result = other.area() - rect.area();
//             return result || (other.width - rect.width)
//         },
//         toString: function () {
//             return `rect[${this.width} x ${this.height}]`
//         }
//     };
//     return rect;
//
// }
//
// let myRect = createRect(7, 5)
// let otherRect = createRect(20, 16)
// let equalAreaRect = createRect(5, 7)
// let rectArr = [myRect, otherRect, equalAreaRect]
// console.log(rectArr)
// //console.log(rectArr.map(e => e.toString()))
// console.log('------other-----')
// rectArr.sort((a, b) => a.compareTo(b))
// console.log(rectArr)
// //console.log(rectArr.map(e => e.toString()))
//


//Solution with Array

function orderRectangles(input) {
    function createRect(width, height){
        let rect =  {
            width: width,
            height: height,
            area: function () {
                return rect.width * rect.height;
            },
            compareTo: function(other) {
                return other.area() - rect.area() || other.width - rect.width;
            }
        };

        return rect;
    }

    let rects = [];
    for(let [width, height] of input){
        rects.push(createRect(width, height));
    }

    let sortedRects = rects.sort((a, b) => a.compareTo(b));
    return sortedRects;
}

orderRectangles([[3,4], [5,3], [3, 4], [3, 5], [12, 1]])