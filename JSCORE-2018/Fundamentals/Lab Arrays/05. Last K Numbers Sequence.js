/**
 * Created by  on 1/24/2018.
 */
 
function lastKNumberSeq(n , k) {
    let result = [1]
    for (let i = 1; i < n; i++) {
        result[i] = result
            .slice(Math.max(0,result.length - k),i + k)
            .reduce((a, b) => {return a + b}, 0)

    }
    console.log(result)
}

lastKNumberSeq(9, 5)