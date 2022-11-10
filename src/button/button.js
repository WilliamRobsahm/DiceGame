
class Button {
    constructor(type,x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.onClick = () => {};


        this.type = type;
        this.img = new Image();
    }

    setDialogue(text) {
        this.dialogue = text;
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
            if(mouseOn(this)){
                ctx.lineWidth = 4;
            } else {
                ctx.lineWidth = 2;
            }

            this.img.src = "./assets/img/dialougebox.png";
            ctx.drawImage(this.img,this.x,this.y,this.w,this.h);

            ctx.fillText(this.dialogue,this.x + this.w/2, this.y + this.h*0.2);
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