/* Enemy
    int | hp            -- Hp of enemy for combat
    img obj | sprite    -- Sprite för motsåndare
*/
class Enemy{
    constructor(hp, sprite){
        this.hp = hp;
        this.maxHp = hp;
        this.sprite = sprite;
        this.alive = true;
    }
    takeDmg(dmg){
        if(dmg>=0){
            this.hp = this.hp-dmg;
            if(this.hp <= 0){
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

    draw(){
        
    }
}