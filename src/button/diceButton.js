class DiceButton extends Button {
    constructor(x,y,w,h,diceBagSpot) {
        super(x,y,w,h);
        this.diceBagSpot = diceBagSpot;
        this.clicked = false;
        this.onClick = () => {};
    }

    draw() {
        if(diceBag[this.diceBagSpot].die[diceBag[this.diceBagSpot].sideUp] =="atc") {
            if(this.clicked == true){
                ctx.drawImage(images.diceAtk,this.x,this.y-50,this.w,this.h);
            } else{
                ctx.drawImage(images.diceAtk,this.x,this.y,this.w,this.h);
            }
            
        }
        if(diceBag[this.diceBagSpot].die[diceBag[this.diceBagSpot].sideUp] =="def") {
            if(this.clicked == true){
                ctx.drawImage(images.diceDef,this.x,this.y-50,this.w,this.h);
            } else{
                ctx.drawImage(images.diceDef,this.x,this.y,this.w,this.h);
            }
        }
        if(diceBag[this.diceBagSpot].die[diceBag[this.diceBagSpot].sideUp] =="heal") {
            if(this.clicked == true){
                ctx.drawImage(images.diceHeal,this.x,this.y-50,this.w,this.h);
            } else{
                ctx.drawImage(images.diceHeal,this.x,this.y,this.w,this.h);
            }
        }
        if(diceBag[this.diceBagSpot].die[diceBag[this.diceBagSpot].sideUp] =="neg") {
            if(this.clicked == true){
                ctx.drawImage(images.diceNeg,this.x,this.y-50,this.w,this.h);
            } else{
                ctx.drawImage(images.diceNeg,this.x,this.y,this.w,this.h);
            }
        }        
    }
}