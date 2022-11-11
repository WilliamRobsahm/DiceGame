
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
                this.img1.src = "assets/img/doorclosed.png";
                this.img2.src = "assets/img/dooropen.png";
                break;
            case "box":
                this.img1.src = "assets/img/crateclosed.png";
                this.img2.src = "assets/img/crateopen.png";
                break;
            case "dialogueOption":
                this.dialogue = "";
                break;
            case "button":
                this.img1.src = "assets/img/button.png";
                this.img2.src = "assets/img/buttondown.png";
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
                this.img.src = "assets/img/dooropen.png";
            } else {
                this.img.src = "assets/img/doorclosed.png";
            }
            ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
        }
        
        
        
        //==================================================
        // Box
        //==================================================
        if(this.type == 'box') {
            if(prisonCell.Box) {
                this.img.src = "assets/img/boxopen.png";
            } else {
                this.img.src = "assets/img/boxclosed.png";
            }
            ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
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

            this.img.src = "./assets/img/dialougebox.png";
            ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
            ctx.fillText(this.dialogue,this.x + this.w/2, this.y + 40);
            ctx.fillText(this.positive,this.x + this.w/2, this.y + this.h - 80);
            ctx.fillText(this.negative,this.x + this.w/2, this.y + this.h - 40);
        }
        
            
        
        //==================================================
        // Button
        //==================================================
        if(this.type == 'button') {
            if(mouseOn(this)){
                this.img.src = "assets/img/button.png";
            } else {
                this.img.src = "assets/img/buttondown.png";
            }
            ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
        }
    }
}