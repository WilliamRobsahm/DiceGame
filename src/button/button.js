
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
        }
    }

    setDialogue(text) {
        this.dialogue = text;
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
            if(mouseOn(this)){
                ctx.lineWidth = 4;
            } else {
                ctx.lineWidth = 2;
            }

            ctx.beginPath();
            ctx.rect(this.x,this.y,this.w,this.h);
            ctx.stroke();
            ctx.closePath();
            ctx.fillText(this.dialogue,this.x + this.w/2, this.y + this.h*0.2);
        }
        if(this.img == 'button') {
            if(mouseOn(this)){
                this.door.src = "assets/img/button.png";
            } else {
                this.door.src = "assets/img/buttondown.png";
            }
            ctx.drawImage(this.door,this.x,this.y,this.w,this.h);
        }
    }
}