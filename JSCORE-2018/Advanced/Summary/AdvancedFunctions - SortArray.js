function sortArray(arr, orderType) {
    if(orderType === 'asc'){
        return (arr.sort((a, b) => a > b))
    }else{
        return (arr.sort((a, b) => a < b))
    }
}

console.log(sortArray([13, 7, 17, 6, 8], 'asc'));
console.log(sortArray([13, 7, 17, 6, 8], 'desc'));