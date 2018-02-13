/**
 * Created by  on 1/24/2018.
 */

function oddIndexOfNumAndReversed(arr) {
    console.log(arr.filter((e, i) => i % 2 !== 0).map(e => e * 2). reverse().join(' '))
}

oddIndexOfNumAndReversed([10, 15, 20, 25])