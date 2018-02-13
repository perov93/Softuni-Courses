/**
 * Created by  on 1/23/2018.
 */


function negativePositiveNumbers(arr) {

    let result = [];
    for (num of arr)
        if (num < 0)
            result.unsift(num); // Insert at the start
        else
            result.push(num); // Append at the end
    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9])

console.log('---------------')

negativePositiveNumbers([3, -2, 0, -1])

