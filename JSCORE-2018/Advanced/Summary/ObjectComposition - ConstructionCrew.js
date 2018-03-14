function modifyWorker(worker) {
    if (worker.handSahking) {
        worker.blooAlchoholLevel += worker.experience * worker.weight * 0.1
        worker.handSahking = false
    }

    return worker
}

console.log(modifyWorker({
    weight: 80,
    experience: 1,
    blooAlchoholLevel: 0,
    handSahking: true
}))

console.log('----------')

console.log(modifyWorker({
    weight: 120,
    experience: 20,
    blooAlchoholLevel: 200,
    handSahking: true
}))