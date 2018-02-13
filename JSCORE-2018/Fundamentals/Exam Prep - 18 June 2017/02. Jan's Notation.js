function solve(arr) {
    let numbers = []
    for (let i = 0; i < arr.length; i++) { //Обикаляме по всички аргументи в масива
        let current = arr[i]
        if (typeof current === 'number') { // Проверяваме дали операндите са числа
            numbers.push(current)  // Ако операндите са числа ги добавяме в новият масив
        } else {
            if (numbers.length > 1) { // Проверка: ако числата са в масива са повече от едно, го взимаме
                let num1 = numbers.pop() // Взимаме последното число от масива
                let num2 = numbers.pop() // Взимаме последното число от масива
                switch(current){  // Започваме с изчисленията
                    case "+": numbers.push(num2 + num1); break
                    case "-": numbers.push(num2 - num1); break
                    case "*": numbers.push(num2 * num1); break
                    case "/": numbers.push(num2 / num1); break
                    default: break
                }
            } else {
                console.log('Error: not enough operands!')
                return
            }
        }
    }
    numbers.length > 1 ? console.log('Error: too many operands!') : console.log(numbers[0])
}

solve([3, 4, '+'])
solve([5, 3, 4, '*', '-'])
solve([7, 33, 8, '-'])
solve([15, '/'])