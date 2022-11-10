import { ctx } from "../const.js";
import { ctxSettings, mouseOn } from "../util.js";

export class Button {
    constructor(x,y,w,h,onClick) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.onClick() = onClick;
    }

    update() {
        if(mouseOn(this)) {

            // Click effect
            if(mouse.click) {
                this.onClick()
            }

            // Hover effect
            else {

            }
        }
    }

    draw() {

        // Placeholder visuals for button
        ctxSettings({fillStyle:"white"});
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
}