
class Button {
    constructor(type,x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.onClick = () => {};

        this.type = type;
        this.img1 = new Image();
        this.img2 = new Image();

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
        // Click effect
        if(mouseOn(this) && mouse.click) {
            this.onClick();
            mouse.click = false;
        }
    }

    draw() {
        // Placeholder visuals for button
        if(this.type == 'door') {
            if(this.open){
                ctx.drawImage(this.img2,this.x,this.y,this.w,this.h);
            } else {
                ctx.drawImage(this.img1,this.x,this.y,this.w,this.h);
            }
        }
        if(this.type == 'box') {
            // Show crate opened if
            if(heldItem == "Crowbar") {
                ctx.drawImage(this.img2,this.x,this.y,this.w,this.h);
            } else {
                ctx.drawImage(this.img1,this.x,this.y,this.w,this.h);
            }
        }
        if(this.type == 'dialogue') {
            ctxSettings({strokeStyle:"white",fillStyle:"white",font:"24px Sketchy",textAlign:"center"});
            if(mouseOn(this) && !diceRoll){
                ctx.lineWidth = 4;
            } else {
                ctx.lineWidth = 2;
            }

            ctx.beginPath();
            ctx.rect(this.x,this.y,this.w,this.h);
            ctx.stroke();
            ctx.closePath();
            ctx.fillText(this.dialogue,this.x + this.w/2, this.y + 40);
            ctx.fillText(this.positive,this.x + this.w/2, this.y + this.h - 80);
            ctx.fillText(this.negative,this.x + this.w/2, this.y + this.h - 40);
        }
        if(this.img == 'button') {
            if(mouseOn(this) && !diceRoll){
                this.door.src = "assets/img/button.png";
            } else {
                this.door.src = "assets/img/buttondown.png";
            }
            ctx.drawImage(this.door,this.x,this.y,this.w,this.h);
        }
    }
}