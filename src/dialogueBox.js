class DialogueBox {
    constructor(dialogue) {
        this.dialogue;
        this.currentText;
        this.displayLength = 0;
        this.img = new Image();

        this.audio = new Audio('assets/sound/dialog_text.wav');
        this.audio.loop = true;
        this.audio.volume = 0.75;

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

        // Can't start a dialogue if another one is already active
        if(this.dialogue) {
            return;
        }
        this.dialogue = dialogue;
        this.current = 0;
        this.displayLength = 0;
        this.doneTalking = false;
        this.onFinish = () => {};
    }

    // Go to next text in dialogue
    nextDialogue() {
        // Can't go to the next dialogue if the dialogue is not done get
        if(this.doneTalking) {
            this.current += 1;
            if(this.current >= this.dialogue.length) {
                this.onFinish();
                this.dialogue = null;
            }
            this.displayLength = 0;
            this.doneTalking = false;
        }
    }

    drawBox() {
        if(this.displayLength < this.dialogue[this.current].length) {
            this.displayLength += 0.37; // Displaying one more letter every 2,7 frame (1/0.37)
            if(this.displayLength == 0.37) { // Start playing "writing" audio
                this.audio.play();
            }
        } else { // Stops playing "writing" sound and resets the time of the audio
            this.doneTalking = true;
            this.audio.currentTime = 0;
            this.audio.pause();
        }

        this.img.src = "./assets/img/dialougebox.png";
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h);

        ctxSettings({fillStyle:"#eee",font:"24px Sketchy",textAlign:"left"});
        ctx.fillText(this.dialogue[this.current].substr(0,this.displayLength),this.x + 112.5,this.y + 75,this.x + this.w - 100);
    }
    
}

const dialogueBox = new DialogueBox(false);