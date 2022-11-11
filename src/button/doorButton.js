

class DoorButton extends Button {
    constructor(x,y,w,h) {
        super(x,y,w,h);
        this.onClick = () => {};
    }

    draw() {
        if(mouseOn(this)) {
            if(prisonCell.Door) {
                ctx.drawImage(images.openDoorHighLight,this.x,this.y,this.w,this.h);
            } else {
                ctx.drawImage(images.doorHighLight,this.x,this.y,this.w,this.h);
            }
        } else {
            if(prisonCell.Door) {
                ctx.drawImage(images.openDoor,this.x,this.y,this.w,this.h);
            } else {
                ctx.drawImage(images.door,this.x,this.y,this.w,this.h);
            }
        }
    }
}

