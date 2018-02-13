/**
 * Created by  on 1/24/2018.
 */

function  firstAndLastKNumber(arr) {
    let n = Number(arr.shift())
    console.log(arr.slice(0, n).join(' '))
    console.log(arr.slice(arr.length - n).join(' '))
}

firstAndLastKNumber([6, 7, 8, 9])
 