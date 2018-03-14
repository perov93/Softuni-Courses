function assembleCar(initialCarParts) {
    let modifiedCar = {}
    let engine

    if(initialCarParts.power <= 90){
        engine = {
            power: 90,
            volume: 1800
        }
    }else if(initialCarParts.power <= 120){
        engine = {
            power: 120,
            volume: 2400
        }
    } else if(initialCarParts.power <= 200){
        engine = {
            power: 200,
            volume: 3500
        }
    }

    let wheels = []
    if(initialCarParts.wheelsize % 2 == 0){
        initialCarParts.wheelsize--
    }
    for (let i = 0; i < 4; i++) {
        wheels.push(initialCarParts.wheelsize)
    }
    modifiedCar.model = initialCarParts.model;
    modifiedCar.engine = engine;
    modifiedCar.carriage = {
        type: initialCarParts.carriage,
        color: initialCarParts.color

    }
    modifiedCar.wheels = wheels

    return modifiedCar
}

console.log(assembleCar({model: 'VW Golf II',
power: 90,
color: 'blue',
carriege: 'hatchback',
wheelsize: 14}))