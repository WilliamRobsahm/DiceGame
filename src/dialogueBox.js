
class DialogueBox {
    constructor(dialogue) {

        

        this.dialogue;
        this.currentText;
        this.displayLength = 0;

        this.onFinish = () => {};
    }

    // Size must be set after canvas size is defined
    setSize() {
        this.x = 0.2 * canvas.width;
        this.y = 0.6 * canvas.height;
        this.w = 0.6 * canvas.width;
        this.h = 0.3 * canvas.height;
    }

    startDialogue(dialogue) {
        this.dialogue = dialogue;
        this.current = 0;
        this.displayLength = 0;
        this.doneTalking = false;
    }

    nextDialogue() {
        this.current += 1;
        if(this.current >= this.dialogue.length) {
            this.onFinish();
            this.dialogue = null;
        }
        this.displayLength = 0;
        this.doneTalking = false;
    }

    drawBox() {
        if(this.displayLength < this.dialogue[this.current].length) {
            this.displayLength += 1;
        } else {
            this.doneTalking = true;
        }
        
        ctxSettings({strokeStyle:"white"});
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h);
        ctx.stroke();
        ctx.closePath();

        ctxSettings({fillStyle:"white",font:"24px Sketchy",textAlign:"left"});
        ctx.fillText(this.dialogue[this.current].substr(0,this.displayLength),this.x + 50,this.y + 50,this.x + this.w - 100);
    }
    
}

const dialogueBox = new DialogueBox(false);