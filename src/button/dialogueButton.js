

class DialogueButton extends Button {
    constructor(x,y,w,h) {
        super(x,y,w,h);
        this.onClick = () => {};
    }

    setOption(option) {
        this.dialogue = option.text;
        this.minimum = option.minimumSum;
        this.reward = option.successPoints;
    }

    draw() {
        ctxSettings({strokeStyle:"white",fillStyle:"white",font:"24px Sketchy",textAlign:"center"});
        if(mouseOn(this) && !diceRoll){
            ctx.lineWidth = 4;
        } else {
            ctx.lineWidth = 2;
        }

        ctx.drawImage(images.dialogueBox,this.x,this.y,this.w,this.h);
        ctx.fillText(this.dialogue,this.x + this.w/2, this.y + 70);
        ctx.font = "20px Sketchy";

        let color;
        switch(this.minimum) {
            case 8: case 9: case 10: case 11:
                color = "rgb(60,200,0)"; break;
            case 12: case 13:
                color = "rgb(165,230,0)"; break;
            case 14: case 15: 
                color = "rgb(255,220,0)"; break;
            case 16: case 17: 
                color = "rgb(255,130,50)"; break;
            case 18: case 19: 
                color = "rgb(255,50,50)"; break;
            case 20:
                color = "rgb(125,0,0)"; break;
        }
        ctx.fillStyle = color;

        ctx.fillText("Minimum roll:  " + this.minimum,this.x + this.w/2, this.y + this.h - 80);
        ctxSettings({fillStyle:"rgb(200,200,200)",font:"20px Sketchy"});
        ctx.fillText("Reward:  " + this.reward + " *",this.x + this.w/2, this.y + this.h - 48);
    }
}