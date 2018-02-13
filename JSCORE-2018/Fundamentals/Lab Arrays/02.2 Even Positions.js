/**
 * Created by  on 1/24/2018.
 */

function evenPositions(arr){
    console.log(arr.filter((el, i) => {
        return i % 2 === 0
    }).join(' '))
}

evenPositions(['5', '10'])
 