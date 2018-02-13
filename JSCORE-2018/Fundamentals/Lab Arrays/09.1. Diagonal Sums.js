/**
 * Created by  on 1/25/2018.
 */

function diagonalSum(matrix) {
    let normalDiagonal = 0
    let backDiagonal = 0

    for (let row = 0; row < matrix.length; row++) {
        normalDiagonal += matrix[row][row]
        backDiagonal += matrix[row][matrix.length - 1 - row]
    }
    console.log(normalDiagonal + ' ' + backDiagonal)
}


let m = [
    [1,2,3,4,5,6],
    [1,1,3,4,5,6],
    [1,2,1,4,5,6],
    [1,2,3,1,5,6],
    [1,2,3,4,1,6],
    [1,2,3,4,5,1]
]

diagonalSum(m)