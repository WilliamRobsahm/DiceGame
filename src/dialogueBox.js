
class DialogueBox {
    constructor(dialogue) {

        

        this.dialogue;
        this.currentText;
        this.displayLength = 0;
        this.img = new Image();

        // onFinish is the function that runs when the dialogue is over
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

        // cant start a dialogue if another one is already active
        if(this.dialogue) {
            return;
        }

        // Set starting properties
        this.dialogue = dialogue;
        this.current = 0;
        this.displayLength = 0;
        this.doneTalking = false;
        this.onFinish = () => {};
    }

    // Go to next text in dialogue
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
        // Increase the amount of characters displayed by 1 every time the box is drawn
        if(this.displayLength < this.dialogue[this.current].length) {
            this.displayLength += 1;
        } else {
            this.doneTalking = true;
        }

        this.img.src = "./assets/img/dialougebox.png";
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h);

        ctxSettings({fillStyle:"#eee",font:"24px Sketchy",textAlign:"left"});
        ctx.fillText(this.dialogue[this.current].substr(0,this.displayLength),this.x + 112.5,this.y + 75,this.x + this.w - 100);
    }
    
}

const dialogueBox = new DialogueBox(false);