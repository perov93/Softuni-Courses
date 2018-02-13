/**
 * Created by  on 2/3/2018.
 */
//
// function printTriangle(n) {
//     for (let i = 0; i <=n; i++) {
//         console.log(('$'.repeat(i)));
//     }
//     for (let i = n - 1; i > 0; i--) {
//         console.log('$'.repeat(i))
//     }
// }
// printTriangle(3)


// function printSquare(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('*'.repeat(n).trim())
//     }
// }
// printSquare(2)

//
// function palindrome(str) {
//     for (let i = 0; i < str.length / 2; i++) {
//         if(str[i] != str[str.length - i- 1]){
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(palindrome('racecar'));
//
// function getDayIndex(day) {
//     switch (day){
//         case 'Monday':
//             return 1;
//         case 'Tuesday':
//             return 2;
//         case 'Wednsday':
//             return 3;
//         case 'Thursday':
//             return 4;
//         case 'Friday':
//             return 5;
//         case 'Saturday':
//             return 6;
//         case 'Sunday':
//             return 7;
//         default: return 'error';
//     }
// }
//
// console.log(getDayIndex('monday'));

// function calculator(n1, n2, op) {
//
//     switch (op){
//         case '+': return n1 + n2;
//         case '-': return n1 - n2;
//         case '/': return n1 / n2;
//         case '*': return n1 * n2;
//         break;
//         default: return 'error'
//     }
// }
//
// console.log(calculator(10, 5.5, '-'));


// function aggregateEl(arrOfNum) {
//
// }
// aggregateEl([1, 2, 4])

// function wordsUpper(str) {
//     let strUpper = str.toUpperCase();
//     let words = extractWords();
//     words = words.filter(w => w != '');
//     return words.join(', ')
//
//     function extractWords() {return strUpper.split(/\W+/)}
// }
//
// console.log(wordsUpper('hi, how are you'));

