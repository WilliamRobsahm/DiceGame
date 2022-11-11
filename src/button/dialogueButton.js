

class DialogueButton extends Button {
    constructor(x,y,w,h) {
        super(x,y,w,h);
        this.onClick = () => {};
    }

    setOption(option) {
        this.dialogue = option.text;
        this.negative = "1-" + (option.minimumSum - 1);
        this.positive =option.minimumSum + "-12";
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
        ctx.fillText(this.positive,this.x + this.w/2, this.y + this.h - 80);
        ctx.fillText(this.negative,this.x + this.w/2, this.y + this.h - 40);
    }
}