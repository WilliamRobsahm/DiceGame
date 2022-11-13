/*  Die(dice)
    int     | sides     -- Vilken typ av tärning d6 = 6
    array   | die       -- Vilka sidor tärningarna ska ha
*/
class die{
    constructor(sides, die){
        this.sides = sides;
        this.die = die;
        this.sideUp = 0;

        this.animationLength = 16;
        this.framesPerNumber = 6;
        this.frameCounter = 0;
        
        this.doneRolling = false;
    }

    roll(){
        this.sideUp = Math.floor(Math.random() * this.sides);
        
    }

    draw(x,y){
        ctx.fillText(this.die[this.sideUp], canvas.width*x, canvas.height*y); 
    }
    
}