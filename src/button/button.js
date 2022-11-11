
class Button {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.onClick = () => {};
    }

    update() {
        //==================================================
        // Looks if the mouse is on it and you have clicked on it
        //==================================================
        if(mouseOn(this)){

            if(!diceRoll) {
                document.body.style.cursor = "pointer";
            }
            
            if(mouse.click) {
                this.onClick();
            }
        }
    }

    draw() {
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
}