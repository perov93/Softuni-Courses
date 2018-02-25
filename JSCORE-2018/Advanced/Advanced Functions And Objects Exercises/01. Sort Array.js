function sort(array, command){
    function ascendingSort(a, b) {
        return a - b;
    }
    function descendingSort(a, b) {
        return b - a;
    }

    let criteria = {
        'asc': ascendingSort,
        'desc': descendingSort
    }

    return array.sort(criteria[command])
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));
console.log(sort([14, 7, 17, 6, 8], 'desc'));
