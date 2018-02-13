/**
 * Created by  on 2/4/2018.
 */

// let str = 'hello'
// for (let s in str) {
//     console.log(`str[${s}] -> ${str[s]}`)
// }

//
// function solve(strArr) {
//     let allStrings = strArr.join('');
//     let chars = Array.from(strArr);
//     let revChars = chars.reverse();
//     let revStr = revChars.join('')
//     return revStr;
// }
//
// console.log(solve(['I', 'am', 'student']));


// function counter(str, text) {
//     let count = 0;
//
//     let index = text.indexOf(str)
//     while(index !== -1){
//         index++;
//         count++;
//         index = text.indexOf(str, index);
//     }
//     return count;
// }
//
// console.log(counter('fox', 'the lazy fox jump over the lazy dog'));

//
// function solve(str, text) {
//     return text.split(str).length - 1
// }
//
// console.log(solve('the', 'the lazy fox jump over the lazy dog'));


// function extract(text) {
//     let open = text.indexOf('(');
//     let close = text.indexOf(')')
//     let result = []
//     while(open !== -1 && close !== -1) {
//         result.push(text.substring(open + 1, close))
//
//         open = text.indexOf('(', close + 1)
//         close = text.indexOf(')', close + 1)
//     }
//
//     return result.join(', ')
// }
//
// console.log(extract('Rakyia (Bulgarian brandy) is home-made liquor (alcoholic drink). It can be made of grapes, plums ot other fruits (even apples)'));

// function printBill(arr) {
//     let products = arr.filter((e,i) => i % 2 == 0)
//     let prices = arr.filter((e, i) => i % 2 == 1).map(Number).reduce((a, b) => a + b)
//     console.log(`You purchased ${products.join(' & ')} for a total sum of:  ${prices}`)
// }
// printBill(['Coca', '1.35', 'Pancakes', '2.88']);


// function users(arr) {
//     let result = arr.map(s => s.split('@'));
//     result = result.map(([user, domain]) => user + domain.split('.').map(s => s[0]).join(''));
//
//     console.log(result)
// }
//
// console.log(users(['peshoo@gmail.com', 'todor_43@mail.dir.bg']));

//
// function solve(arr) {
//     let users = arr.map(s => s.split('@'))
//     let result = [];
//
//     for (let user of users) {
//         let [name, domain] = user;
//         let domainTokens = domain.split('.')
//         domainTokens = domainTokens.map(e => e[0])
//         let username = name + '.'+ domainTokens.join('');
//
//         result.push(username)
//     }
//     console.log(result.join(', '))
// }
//
// solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg']);







