/*  Player 
    hp | int        -- players hp for combat
*/

class Player {
    constructor(hp){
        this.hp = hp;
        this.maxHp = hp;
        this.alive = true;
    }

    takeDmg(dmg){
        this.hp = this.hp-dmg;
        if(this.hp <= 0){
            console.log("test");
            this.alive = false;
        }
    }
}