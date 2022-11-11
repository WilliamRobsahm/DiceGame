
class CombatButton extends Button {
    constructor(x,y,w,h) {
        super(x,y,w,h);
        this.onClick = () => {};
    }

    draw() {
        if(mouseOn(this)){
            ctx.drawImage(images.button,this.x,this.y,this.w,this.h);
        } else {
            ctx.drawImage(images.buttonDown,this.x,this.y,this.w,this.h);
        }
    }
}