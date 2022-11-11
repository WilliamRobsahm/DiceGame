
class BoxButton extends Button {
    constructor(x,y,w,h) {
        super(x,y,w,h);
        this.onClick = () => {};
    }

    draw() {
        if(prisonCell.Box) {
            ctx.drawImage(images.openCrate,this.x,this.y,this.w,this.h);
        } else {
            ctx.drawImage(images.crate,this.x,this.y,this.w,this.h);
        }
    }
}