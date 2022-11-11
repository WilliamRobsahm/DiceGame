

class DoorButton extends Button {
    constructor(x,y,w,h) {
        super(x,y,w,h);
        this.onClick = () => {};
    }

    draw() {
        if(prisonCell.Door) {
            ctx.drawImage(images.openDoor,this.x,this.y,this.w,this.h);
        } else {
            ctx.drawImage(images.door,this.x,this.y,this.w,this.h);
        }
    }
}

