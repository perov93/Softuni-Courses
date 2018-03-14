function result() {
    let argumentTypes = {}
    for (let i = 0; i < arguments.length; i++) {
        let argumentValue = arguments[i]
        console.log(`${typeof argumentValue} : ${argumentValue}`)

        if(!argumentTypes.hasOwnProperty(typeof argumentValue)){
            argumentTypes[typeof argumentValue] = 0;
        }

        argumentTypes[typeof argumentValue]++
    }
    let sortedArr = []
    for (let kvp in argumentTypes) {
       if(argumentTypes.hasOwnProperty(kvp)){
           let value = argumentTypes[kvp]
           sortedArr.push([kvp, value])
       }
    }
    sortedArr = sortedArr.sort((a, b) => b[1] - a[1])
    for (let i = 0; i < sortedArr.length; i++) {
        var element = sortedArr[i]
        let argumentType = element[0]
        let argumentCounter = element[1]
        console.log(`${argumentType} = ${argumentCounter}`)
    }
}

result('cat','pavel', 42, 420, function (){console.log('Hello world!'); });