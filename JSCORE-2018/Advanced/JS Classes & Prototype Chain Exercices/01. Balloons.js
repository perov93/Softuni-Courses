function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonCollor, ribbonLenght) {
            super(color, gasWeight)
            this.ribbonCollor = ribbonCollor;
            this.ribbonLength = ribbonLenght;
            this._ribbon = {
                color: ribbonCollor,
                length: ribbonLenght
            }

        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonCollor, ribbonLenght, text) {
            super(color, gasWeight, ribbonCollor, ribbonLenght)
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}