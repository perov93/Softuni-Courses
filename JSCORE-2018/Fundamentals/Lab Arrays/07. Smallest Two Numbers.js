/**
 * Created by  on 1/24/2018.
 */
 
function smalletstTwoNumber(arr) {
    console.log(arr.sort((a, b)=> a - b).slice(0, Math.min(2, arr.length)).join(' '))
}

smalletstTwoNumber([100, 200, 3000, 4, 5, 6, 1])