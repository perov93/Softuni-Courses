function printDeckOfCards(cardsArr) {
    function makeCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        if (!validFaces.includes(face)) {
            throw new Error("Invalid face")
        }
        if (!validSuits.includes(suit)) {
            throw new Error("Invalid suit")
        }
        let card = {
            face: face,
            suit: suit,
            toString: () => {
                let suitToChar = {
                    'S': "\u2660",
                    'H': "\u2665",
                    'D': "\u2666",
                    'C': "\u2663"
                };

                return `${card.face}${suitToChar[card.suit]}`
            }
        }
        return card;
    }

    let deck = []


    for (let cardsAsStr of cardsArr) {
        let face = cardsAsStr.substring(0, cardsAsStr.length - 1)
        let suit = cardsAsStr[cardsAsStr.length - 1]
        try {
            deck.push(makeCard(face, suit))
        } catch (err) {
            console.log(`Invalid card: ${cardsAsStr}`)
            return
        }
    }
    return deck.join(' ')

}
//console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));

console.log(printDeckOfCards(['AS', '10D', 'TH', '2C']));