/**
 * Created by  on 1/24/2018.
 */

function negPos(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {

        let n = Number(arr[i])
        if (n >= 0){
            result.push(n)
        } else {
            result.unshift(n)
        }
    }
    console.log(result.join('\n'))
}

negPos([7, -2, 8, 9])
 