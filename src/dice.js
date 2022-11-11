
class Dice {
    constructor(sides, modifier) {
        this.sides = sides;
        this.modifier = modifier;
        this.amount = amount;
    }

    roll(animationLength) {

    }
}

class DiceRoll {
    constructor(sides,modifier,amount) {
        this.sides = sides;
        this.modifier = modifier;
        this.amount = amount;
        this.animationLength = 16;

        this.numberArray = this.generateResult();

        // final result is the sum of all the final numbers in the dice array, plus the modifier
        this.finalResult = this.modifier;;
        for(let i=0;i<this.numberArray.length;i++) {
            this.numberArray[i][this.animationLength-1] += this.modifier;
        }
        this.finalResult = this.result += this.modifier;

        this.displayingNumber = null;
    }

    // create an array of numbers for the dice animation. The
    generateResult() {
        let result = [];
        for(let d=0;d<this.amount;d++) {
            let diceArray = [];

            // Add first number into array
            result.push(rng(1,this.sides));

            // Add numbers to array
            for(let i=0;i<this.animationLength-1;i++) {

                // If you get the same number as the previous roll, generate a new number
                // This is to make the animation not look weird
                while(true) {
                    let lastNum = result[i]
                    let num = rng(1,this.sides);
                    if(num != lastNum) {
                        result.push(num);
                        break;
                    }
                }
            }
            result.push(diceArray);
        }
        return result;
    } 

    drawDice() {

    }
}

let diceRoll = null;