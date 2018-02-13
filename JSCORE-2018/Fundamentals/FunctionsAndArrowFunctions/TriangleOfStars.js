function triangleOfStars(size) {
    for (let i = 1; i < size; i++) {
        console.log("*".repeat(i))

    }
    for (let i = size - 1; i > 0; i--) {
    console.log("*".repeat(i))

    }
}

triangleOfStars(4)