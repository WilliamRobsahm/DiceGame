
class Button {
    constructor(type,x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.onClick = () => {};
        this.type = type;

        switch(this.type) {
            case "door":
                this.open = false;
                break;
            case "box":
                this.img1 = images.crate;
                this.img2 = images.crateClosed;
                break;
            case "dialogueOption":
                this.dialogue = "";
                break;
            case "button":
                this.img1 = images.button;
                this.img2 = images.buttonDown;
                break;
        }

    }

    setOption(option) {
        this.dialogue = option.text;
        this.negative = "1-" + (option.minimumSum - 1);
        this.positive =option.minimumSum + "-12";
    }

    update() {
        //==================================================
        // Looks if the mouse is on it and you have clicked on it
        //==================================================
        if(mouseOn(this)){
            document.body.style.cursor = "pointer";
            if(mouse.click) {
                this.onClick();
            }
        } else {
            document.body.style.cursor = "default";
        }
    }

    draw() {
        //==================================================
        // Door and box
        //==================================================
        if(this.type == 'door') {
            if(prisonCell.Door) {
                ctx.drawImage(images.openDoor,this.x,this.y,this.w,this.h);
            } else {
                ctx.drawImage(images.door,this.x,this.y,this.w,this.h);
            }
        }
        
        //==================================================
        // Box
        //==================================================
        if(this.type == 'box') {
            if(prisonCell.Box) {
                ctx.drawImage(images.openCrate,this.x,this.y,this.w,this.h);
            } else {
                ctx.drawImage(images.crate,this.x,this.y,this.w,this.h);
            }
        }



        //==================================================
        // Dialogue
        //==================================================
        if(this.type == 'dialogue') {
            ctxSettings({strokeStyle:"white",fillStyle:"white",font:"24px Sketchy",textAlign:"center"});
            if(mouseOn(this) && !diceRoll){
                ctx.lineWidth = 4;
            } else {
                ctx.lineWidth = 2;
            }

            ctx.drawImage(images.dialogueBox,this.x,this.y,this.w,this.h);
            ctx.fillText(this.dialogue,this.x + this.w/2, this.y + 40);
            ctx.fillText(this.positive,this.x + this.w/2, this.y + this.h - 80);
            ctx.fillText(this.negative,this.x + this.w/2, this.y + this.h - 40);
        }
        
            
        
        //==================================================
        // Button
        //==================================================
        if(this.type == 'button') {
            if(mouseOn(this)){
                ctx.drawImage(images.button,this.x,this.y,this.w,this.h);
            } else {
                ctx.drawImage(images.buttonDown,this.x,this.y,this.w,this.h);
            }
        }
    }
}