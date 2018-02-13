function solve(input) {
    let templateMatrixSide = Number(input[0]);
    let templateMatrix = [];
    for (let i = 1; i < 1 + templateMatrixSide; i++) {
        let currentRow = input[i];
        templateMatrix.push(currentRow.split(' ').map(Number))
    }
    let encodedMatrix = [];
    for (let i = 1 + templateMatrixSide; i < input.length; i++) {
        let currentRow = input[i];
        encodedMatrix.push(currentRow.split(' ').map(Number))
    }
    let templateMatrixRows = templateMatrixSide
    let templateMatrixCols = templateMatrix[0].length

    for (let encodedRow = 0; encodedRow < encodedMatrix.length; encodedRow+= templateMatrixRows) {
        let currentRow = encodedMatrix[encodedRow];
        for (let encodedCol = 0; encodedCol < encodedMatrix[encodedRow].length; encodedCol+= templateMatrixCols) {
            let currentEncodedNumber = encodedMatrix[encodedRow][encodedCol]

            for (let templateRow = 0; templateRow < templateMatrix.length; templateRow++) {
                let currentTemplateRow = templateMatrix[templateRow];
                for (let templateCol = 0; templateCol < templateMatrix[templateRow].length; templateCol++) {
                    let currentTemplateNumber = templateMatrix[templateRow][templateCol]

                    let targetRow = encodedRow + templateRow
                    let targetCol = encodedCol + templateCol

                    if(targetCol < encodedMatrix[encodedRow].length && targetRow < encodedMatrix.length){
                        let summedNumber = encodedMatrix[targetRow][targetCol] + templateMatrix[templateRow][templateCol]
                        summedNumber %= 27
                        if(summedNumber == 0){
                            encodedMatrix[targetRow][targetCol] = ' '
                        }else {
                            encodedMatrix[targetRow][targetCol] = String.fromCharCode(summedNumber + 64)
                        }
                    }
                }
            }
        }
    }
    let output = ''
    encodedMatrix.forEach(function (element) {
        element.forEach(function (letter) {
            output += letter
        }, this)
    }, this)
    console.log(output.trim())
}

solve([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ])
console.log('-------')
solve([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ])

console.log('-------')

solve(['1',
'1', '3', '13',
'12', '22', '14', '13', '25', '0', '4', '24', '23',
'18', '24', '2', '25', '22', '0', '0', '11', '18',
'8', '25', '6', '26', '8', '23', '13', '4', '14',
'14', '3', '14', '10', '6', '1', '6', '16', '14',
'11', '12', '2', '10', '24', '2', '13', '24', '0',
'24', '24', '10', '14', '15', '25', '18', '24', '12',
'4', '24', '0', '8', '4', '22', '19', '22', '14',
'0', '11', '18', '26', '1', '19', '18', '13', '15',
'8', '15', '14', '26', '24', '14', '26', '24', '14'])