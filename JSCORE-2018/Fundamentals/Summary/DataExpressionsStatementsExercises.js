/**
 * Created by  on 2/2/2018.
 */

// function printTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('$'.repeat(i).trim())
//     }
// }
// printTriangle(4)



// function solve(name) {
//     console.log(('Hello ' + name + ', I am JS'));
// }
//
// solve('Pavel')


// function solve(a, b) {
//     let area = a * b;
//     let perimeter = (a + b)* 2;
//
//     console.log((area).toFixed(2));
//     console.log((perimeter).toFixed(2))
// }
// solve(2.5, 3.14)

//
// function distanceOverTime(arrOfNumbers) {
//     let dist1 = (arrOfNumbers[0] / 3.6) * arrOfNumbers[2]
//     let dist2 = (arrOfNumbers[1] / 3.6) * arrOfNumbers[2]
//
//     let delta = Math.abs(dist1 - dist2)
//     console.log(delta)
// }
// distanceOverTime([5, -5, 40])


//
// function distance3D(arrOfNum) {
//     let x1 = arrOfNum[0]
//     let y1 = arrOfNum[1]
//     let z1 = arrOfNum[2]
//     let x2 = arrOfNum[3]
//     let y2 = arrOfNum[4]
//     let z2 = arrOfNum[5]
//
//     let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + (z2 - z1)*(z2 - z1));
//     console.log((distance));
// }
// distance3D([1, 1, 0, 5, 4, 0])
// distance3D([3.5, 0, 1, 0, 2, -1])


// function gradsToDegrees(grads) {
//     grads = Number(grads);
//     let degrees = grads * 3.6 / 4;
//     degrees = degrees % 360;
//
//     if(degrees < 0) {
//         degrees = 360 + degrees;
//     }
//     console.log(degrees);
//
// }
// gradsToDegrees(100)


// function interest(arrOfNum) {
//     let principalSum = arrOfNum[0]
//     let interestRate = arrOfNum[1] / 100
//     let compoundingPeriod = 12 / arrOfNum[2]
//     let timeSpan = arrOfNum[3]
//
//     let formula = principalSum * (Math.pow(1 + (interestRate / compoundingPeriod), (compoundingPeriod * timeSpan)))
//     console.log((formula).toFixed(2))
// }
//
// interest([1500, 4.3, 3, 6])
// interest([100000, 5, 12, 25])


// function rounding(arrOfNum) {
//     let round = arrOfNum[0]
//     let precision = arrOfNum[1]
//
//     if(precision > 15){
//         precision = 15
//     }
//     let x = round.toFixed(precision)
//     console.log(parseFloat(x))
// }
// rounding([10.5, 3])


// function nowPlaying(input) {
//
//     let artistName = String(input[0]);
//     let trackName = String(input[1]);
//     let duration = String(input[2]);
//
//     //console.log("Now Playing: " + trackName + " - " + artistName + " [" + duration+']');
//     console.log(`Now Playing: ${input[1]} - ${input[0]} [${input[2]}]`);
//
// }
// nowPlaying(['Number One', 'Nelly', '4:09'])
