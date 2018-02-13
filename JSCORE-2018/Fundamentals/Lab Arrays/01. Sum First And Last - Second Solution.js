/**
 * Created by  on 1/23/2018.
 */

function sumFirstAndLast(arr){
    let n1 = Number(arr[0]);
    let n2 = Number(arr[arr.length - 1]);
    let sum = n1 + n2;

    console.log(n1 + n2);
    console.log(sum);

}

sumFirstAndLast([10, 20, 30])
