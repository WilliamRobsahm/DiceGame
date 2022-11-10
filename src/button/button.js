
class Button {
    constructor(type,x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.onClick = () => {};

        this.type = type;
        this.img = new Image();
        this.open = false;

        switch(this.type) {
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
                this.img.src = "assets/img/dooropen.png";
            } else {
                this.img.src = "assets/img/doorclosed.png";
            }
            ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
        }
        if(this.type == 'box') {
            // Show crate opened if
            console.log(this.open)
            if(this.open) {
                this.img.src = "assets/img/crateopen.png";
            } else {
                this.img.src = "assets/img/crateclosed.png";
            }
            ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
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