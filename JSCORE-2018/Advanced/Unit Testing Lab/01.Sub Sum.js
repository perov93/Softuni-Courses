function subSum(arr, startIndex, endIndex) {
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(startIndex < 0) startIndex = 0
    if(endIndex >= arr.length) endIndex = arr.length - 1
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        sum += Number(arr[i])
    }
    return sum
}

console.log(subSum([10, 20, 30, 40], -1, 2)); //60
console.log(subSum([10, 20, 30, 40], 1, 20)); //90
console.log(subSum([10, 20, 30, 40], 1, 2)); //50
console.log(subSum('pesho', 3, 4)); //NaN
console.log(subSum({}, 1, 2));
console.log(subSum(['10', '20', '30'], 1, 2));
console.log(subSum([1.1, 1.1, 1.1], -1, 20).toFixed(3));

