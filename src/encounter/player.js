/*  Player 
    hp | int        -- players hp for combat
*/

export class Player {
    constructor(hp){
        this.hp = hp;
        this.alive = true;
    }

    takeDmg(dmg){
        this.hp-dmg;
        if(this.hp <= 0){
            this.alive = false;
        }
    }
}