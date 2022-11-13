
class CombatButton extends Button {
    constructor(x,y,w,h,text) {
        super(x,y,w,h);
        this.text = text;
        this.onClick = () => {};
    }

    draw() {
        if(mouseOn(this)){
            ctx.drawImage(images.button,this.x,this.y,this.w,this.h);
        } else {
            ctx.drawImage(images.buttonDown,this.x,this.y,this.w,this.h);
        }
        ctx.fillText(this.text,this.x + this.w/2-20, this.y+this.h/2);
    }

    
}