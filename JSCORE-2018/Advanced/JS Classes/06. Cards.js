let myModule = (() => {
    let Suits = {
        CLUBS: "\u2663",
        DIAMONDS: "\u2666",
        HEARTS: "\u2665",
        SPADES: "\u2660"
    };

    let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    class Card {
        constructor(face, suit) {
            this.suit = suit;
            this.face = face;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (!Faces.includes(value)) {
                throw new Error("Invalid card face")
            }
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(suit)) {
                throw new Error("Invalid card suit:" + suit)
            }
            this._suit = suit
        }

        toString() {
            return this._face + this._suit
        }

        static get validFaces() {
            return Card._validFaces;
        }
    }

    Card._validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    return {Suits, Card}
})();

let Suits = myModule.Suits;
let Card = myModule.Card
let c1 = new Card('2', Suits.CLUBS)
console.log('' + c1)

