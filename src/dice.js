
class DiceRoll {
    constructor(sides,modifier,amount) {
        this.sides = sides;
        this.modifier = modifier;
        this.amount = amount;

        this.animationLength = 16;
        this.framesPerNumber = 6;
        this.frameCounter = 0;
        
        this.doneRolling = false;

        this.numberArray = this.generateResult();

        // final result is the sum of all the final numbers in the dice array, plus the modifier
        this.finalResult = this.modifier;
        for(let i=0;i<this.numberArray.length;i++) {
            this.finalResult += this.numberArray[i][this.animationLength-1 + i*8];
        }

        this.displayingNumber = 0;
    }

    // create an array of numbers for the dice animation. The
    generateResult() {
        let result = [];
        for(let d=0;d<this.amount;d++) {
            let diceArray = [];

            // Add first number into array
            diceArray.push(rng(1,this.sides));

            // Add numbers to array
            let l = this.animationLength-1 + d*8;
            for(let i=0;i<l;i++) {

                // If you get the same number as the previous roll, generate a new number
                // This is to make the animation not look weird
                while(true) {
                    let lastNum = result[i]
                    let num = rng(1,this.sides);
                    if(num != lastNum) {
                        diceArray.push(num);
                        break;
                    }
                }
            }
            result.push(diceArray);
        }
        return result;
    } 

    drawDice() {
        // Dice positioning
        let spaceBetween = 64;
        let w = 200;
        let h = 200;
        let totalW = this.amount * w + (this.amount-1) * spaceBetween;
        let x = canvas.width/2 - totalW/2;
        let y = canvas.height/2 - h/2;

        // Decide which number to display
        this.frameCounter += 1;
        if(this.frameCounter == this.framesPerNumber) {
            this.displayingNumber += 1;
            this.frameCounter = 0
        }

        // Draw dice
        for(let d=0;d<this.amount;d++) {
            ctx.fillStyle = "white";
            let disNum = clamp(this.displayingNumber,0,this.numberArray[d].length-1);

            let n = this.numberArray[d][disNum];
            ctx.drawImage(images['dice'+n],x + d * (w + spaceBetween),y,w,h);

            if(this.displayingNumber > this.animationLength + (this.amount) * 6 + 1) {
                this.doneRolling = true;
            }
        }

        // Draw sum
        if(this.doneRolling) {
            ctxSettings({font:"36px Sketchy"});
            ctx.fillText("Sum: " + this.finalResult, canvas.width / 2,canvas.height * 0.7);
            ctxSettings({font:"24px Sketchy",fillStyle:"rgb(160,160,160)"});
            ctx.fillText("Click to continue", canvas.width / 2,canvas.height * 0.75);
            document.body.style.cursor = "pointer";
        }
        
    }
}

let diceRoll = null;