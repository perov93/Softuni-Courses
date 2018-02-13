/**
 * Created by  on 1/25/2018.
 */

function solve(arr) {
    let step = Number(arr.pop());

    for (let i = 0; i < arr.length; i+=step) {
        console.log(arr[i]);
    }
}

solve([5,20,31,4,20,2]);
console.log('------------')
solve([1,2,3,4,5,6]);
console.log('------------')
solve(['dsa', 'asd', 'test', 'test', 2]);