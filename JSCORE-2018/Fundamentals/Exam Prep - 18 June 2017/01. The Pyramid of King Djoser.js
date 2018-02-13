function solve(size, increment) {
    let totalHeight = Math.ceil(size / 2); // Формула за изчисляване на височината;
    let [stone, marble, lapis] = [0, 0, 0] // Деклариране на променливите
    for (let i = 1; i <= totalHeight - 1; i++) {
        let currentStone = (size - 2)* (size - 2);
        if(i % 5 === 0) {
            lapis += size * size - currentStone;
        }else{
            marble += size * size - currentStone;
        }
        stone += currentStone
        size -= 2
    }
    let gold = Math.ceil(size * size);
    console.log(`Stone required: ${Math.ceil(stone * increment)}`)
    console.log(`Marble required: ${Math.ceil(marble * increment)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`)
    console.log(`Gold required: ${Math.ceil(gold * increment)}`)
    console.log(`Final pyramid height: ${Math.floor(totalHeight * increment)}`)
}

//solve(11, 1)
solve(11, 0.75)
// solve(23, 0.5)