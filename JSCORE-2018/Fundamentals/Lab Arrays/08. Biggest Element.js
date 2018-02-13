/**
 * Created by  on 1/24/2018.
 */

function biggestElement(matrix) {
    console.log(
        matrix.map(arr => arr.sort((a, b) => a < b)[0])
        .sort((a, b) => a < b)[0])

}
biggestElement([[20, 100, 10], [10, 30, 90]]);