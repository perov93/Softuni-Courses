/**
 * Created by  on 2/2/2018.
 */
//
// function circleArea(r) {
//     let area = Math.PI * r * r;
//     console.log(area)
//     console.log((area).toFixed(2))
// }
// circleArea(5)

//
// function triangleArea(a, b, c) {
//     let sp = (a + b + c) / 2
//     let area = Math.sqrt(sp * (sp - a)*(sp - b)* (sp - c))
//
//     console.log(area)
// }
//
// triangleArea(2, 3.5, 4)

// function cone(r, h) {
//     let s = Math.sqrt(r * r + h * h)
//         let volume = Math.PI * r * r * h /3
//         let area = Math.PI * r * (r + s)
//
//     console.log("volume = " + volume.toFixed(2))
//     console.log("area = " + area.toFixed(2))
// }
// cone(3.3, 7.8)

// function oddEvenInvalid(number) {
//     if(number % 2 == 0){
//         console.log("even")
//     }
//     else if(number == Math.round(number)){
//         console.log("odd")
//     }
//     else {
//         console.log("Invalid")
//     }
// }
//
// oddEvenInvalid(1.5)

// function fruitOrVegetable(input) {
//
//     switch(input) {
//         case 'banana':
//         case 'apple':
//         case 'kiwi':
//         case 'cherry':
//         case ' lemon':
//         case 'grapes':
//         case 'peach':
//             console.log('fruit')
//             break;
//         case 'tomato':
//         case 'cucumber':
//         case 'pepper':
//         case 'onion':
//         case 'parsley':
//         case 'garlic':
//             console.log('vegetable')
//             break;
//         default:
//             console.log('unknown')
//     }
// }
//
// fruitOrVegetable('garlic')

// function colorfulNumbers(n) {
//     let html = '<ul>\n'
//     for (let i = 1; i < n; i++) {
//         let color = 'blue'
//         if(i % 2 != 0) {
//             color = 'green'
//         }
//         html += `<li><span style = 'color:${color}'>${i}</span></li>\n`
//     }
//     html += '</ul>'
/     console.log(html);
// }
// colorfulNumbers(['10']);

// function prime(n) {
//     let prime = true;
//     let max = Math.ceil(Math.sqrt(n))
//     for (let i = 2; i <= max; i++) {
//         if(n == i) continue;
//         if(n % i == 0){
//             prime = false;
//             break;
//         }
//     }
//     return prime && (n > 1)
// }
// console.log(prime(919))


// function log(n) {
//     for (let num of n) {
//         console.log(Math.log2(num))
//     }
// }
//
// log([1024, 1048576, 256, 1, 2])