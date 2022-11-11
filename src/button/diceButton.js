class DiceButton extends Button {
    constructor(x,y,w,h,diceBagSpot) {
        super(x,y,w,h);
        this.diceBagSpot = diceBagSpot;
        this.clicked = false;
        this.onClick = () => {};
    }

    draw() {
        if(this.clicked){
            ctx.fillStyle = "rgba(255,255,255,0.5)";
            ctx.fillRect(this.x,this.y,this.w,this.h);
        }
        if(diceBag[this.diceBagSpot].die[diceBag[this.diceBagSpot].sideUp] =="atc") {
            ctx.drawImage(images.diceAtk,this.x,this.y,this.w,this.h);
        }
        if(diceBag[this.diceBagSpot].die[diceBag[this.diceBagSpot].sideUp] =="def") {
            ctx.drawImage(images.diceDef,this.x,this.y,this.w,this.h);
        }
        if(diceBag[this.diceBagSpot].die[diceBag[this.diceBagSpot].sideUp] =="heal") {
            ctx.drawImage(images.diceHeal,this.x,this.y,this.w,this.h);
        }
        if(diceBag[this.diceBagSpot].die[diceBag[this.diceBagSpot].sideUp] =="neg") {
            ctx.drawImage(images.diceNeg,this.x,this.y,this.w,this.h);
        }
        
    }
}