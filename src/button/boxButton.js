
class BoxButton extends Button {
    constructor(x,y,w,h) {
        super(x,y,w,h);
        this.onClick = () => {};
    }

    draw() {
        if(mouseOn(this)) {
            if(prisonCell.Box) {
                ctx.drawImage(images.openBoxHighLight,this.x,this.y,this.w,this.h);
            } else {
                ctx.drawImage(images.boxHighLight,this.x,this.y,this.w,this.h);
            }
        } else {
            if(prisonCell.Box) {
                ctx.drawImage(images.openBox,this.x,this.y,this.w,this.h);
            } else {
                ctx.drawImage(images.box,this.x,this.y,this.w,this.h);
            }
        }
    }
}