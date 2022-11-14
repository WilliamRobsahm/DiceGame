class DialogueBox {
    constructor(dialogue) {
        this.dialogue;
        this.current;
        this.currentText;
        this.displayLength = 0;
        this.img = new Image();


        this.audioDefault = new Audio('assets/sound/dialog_text.wav');
        this.audioDefault.loop = true;
        this.audioDefault.volume = 0.62;
        
        this.audioYou = new Audio('assets/sound/dialogue_2.wav');
        this.audioYou.loop = true;
        this.audioYou.volume = 0.62;
        
        this.audioGuard = new Audio('assets/sound/dialogue_10.wav');
        this.audioGuard.loop = true;
        this.audioGuard.volume = 0.62;
        
        this.audioArtheur = new Audio('assets/sound/dialogue_23.wav');
        this.audioArtheur.loop = true;
        this.audioArtheur.volume = 0.62;

        this.audioReynold = new Audio('assets/sound/dialogue_20.wav');
        this.audioReynold.loop = true;
        this.audioReynold.volume = 0.62;

        this.audioWalter = new Audio('assets/sound/dialogue_12.wav');
        this.audioWalter.loop = true;
        this.audioWalter.volume = 0.62;

        this.audioBoss = new Audio('assets/sound/dialogue_8.wav');
        this.audioBoss.loop = true;
        this.audioBoss.volume = 0.62;
        
        

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

        // Can't start a dialogue if another one is already active
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
        // Increase the amount of characters displayed by 1 every time the box is drawn
        if(this.displayLength < this.dialogue[this.current].text.length) {
            if(this.displayLength % 2 == 0) {
                switch(this.dialogue[this.current].character) {
                    case 'You':
                        this.audioYou.play();
                        break;
                    case 'Guard':
                        this.audioGuard.play();
                        break;
                    case 'Artheur':
                        this.audioArtheur.play();
                        break;
                    case 'Reynold':
                        this.audioReynold.play();
                        break;
                    case 'Walter':
                        this.audioWalter.play();
                        break;
                    case 'Boss':
                        this.audioBoss.play();
                        break;
                    case 'Tutorial':
                    case '':
                        this.audioDefault.play();
                        break;
                }
            }
            this.displayLength += 0.5; // Displaying one more letter every 2,7 frame (1/0.37)
        } 
        
        else { // Stops playing "writing" sound and resets the time of the audio
            this.doneTalking = true;
            this.audioDefault.pause();
            this.audioYou.pause();
            this.audioGuard.pause();
            this.audioArtheur.pause();
            this.audioReynold.pause();
            this.audioWalter.pause();
            this.audioBoss.pause();
        }

        this.img.src = "./assets/img/dialougebox.png";
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h);

        let textY;
        if(this.dialogue[this.current].character == "") {
            textY = this.y + 80;
        } else {
            textY = this.y + 110;
        }

        ctxSettings({fillStyle:"#eee",font:"24px Sketchy",textAlign:"left"});
        ctx.fillText(this.dialogue[this.current].text.substr(0,this.displayLength),this.x + 112.5,textY,this.x + this.w - 100);

        ctxSettings({fillStyle:"#aaa",font:"24px Sketchy",textAlign:"left"});
        ctx.fillText(this.dialogue[this.current].character,this.x + 112.5,this.y + 70,this.x + this.w - 100);
    }
    
}

const dialogueBox = new DialogueBox(false);