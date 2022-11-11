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
        if(dmg>=0){
            this.hp = this.hp-dmg;
            if(this.hp > 0){
                this.alive = false;
            }
            return dmg;
        }
        return 0;
    }
    heal(heal){
        this.hp = this.hp+heal;
        if(this.hp>this.maxHp){
            heal = this.maxHp - this.hp;
            this.hp = this.maxHp;
        }
        return heal;
    }
}