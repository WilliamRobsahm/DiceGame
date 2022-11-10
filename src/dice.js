
class DiceRoll {
    constructor(sides,modifier) {
        this.sides = sides;
        this.modifier = modifier;
        this.animationLength = 16;

        this.numberArray = this.generateResult();

        this.result = this.numberArray[this.animationLength-1];
        this.finalResult = this.result += this.modifier;

        this.displayingNumber = null;

        console.log(this.finalResult);
    }

    generateResult() {
        let result = [];

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

        return result;
    } 
}
