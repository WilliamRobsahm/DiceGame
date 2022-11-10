import { ctx } from "../const.js";
import { mouse } from "../controls.js";
import { ctxSettings, mouseOn } from "../util.js";

export class Button {
    constructor(img,x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.door = new Image();
        this.onClick = () => {};
    }

    update() {
        if(mouseOn(this)) {

            // Click effect
            if(mouse.click) {
                console.log("click");
                this.onClick();
            }

            // Hover effect
            else {

            }
        }
    }

    draw() {
        // Placeholder visuals for button
        if(this.img == 'door') {
            if(mouseOn(this)){
                this.door.src = "assets/img/dooropen.png";
            } else {
                this.door.src = "assets/img/doorclosed.png";
            }
            ctx.drawImage(this.door,this.x,this.y,this.w,this.h);
        }
        if(this.img == 'box') {
            if(mouseOn(this)){
                this.door.src = "assets/img/crateopen.png";
            } else {
                this.door.src = "assets/img/crateclosed.png";
            }
            ctx.drawImage(this.door,this.x,this.y,this.w,this.h);
        }
    }
}