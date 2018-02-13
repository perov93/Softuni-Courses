function solution(arr) {
    aggregate(0, (a, b) => {return a + b})
    aggregate(0, (a, b) => {return a + 1/b})
    aggregate('', (a, b) => {return a + b})
    function aggregate(initialValue, arrow) {
        for (let i = 0; i < arr.length; i++) {

            initialValue = arrow(initialValue, arr[i])
        }
        console.log(initialValue)
    }
}
solution([10, 20, 30])