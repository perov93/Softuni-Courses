function solve(inputNumbers) {
    inputNumbers = inputNumbers.map(Number);
    let biggestProduct = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < inputNumbers.length; i++) {

            let currentNumber = inputNumbers[i];
            if(currentNumber >= 0 && currentNumber < 10){
                let currentProduct = 1;
                for (let j = i + 1; j <= i + currentNumber; j++) {
                    let currentMultiplier = inputNumbers[j];
                    currentProduct *= currentMultiplier
                    
                }
                if(currentProduct > biggestProduct){
                    biggestProduct = currentProduct
                }
            }
    }
    console.log(biggestProduct)
}
solve([10,
20,
2,
30,
44,
3,
56,
20,
24])