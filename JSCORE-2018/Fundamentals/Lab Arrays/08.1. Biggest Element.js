/**
 * Created by  on 1/24/2018.
 */

function biggestElement(matrix) {
    let min = Number.NEGATIVE_INFINITY
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > min){
                min = matrix[row][col]
            }
        }
    }
    console.log(min)
}

biggestElement([[20, 100, 10], [10, 30, 90]]);