/* Enemy
    int | hp            -- Hp of enemy for combat
    img obj | sprite    -- Sprite för motsåndare
*/
class Enemy{
    constructor(hp, sprite, x, y, w, h){
        this.hp = hp;
        this.maxHp = hp;
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
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
        ctx.drawImage(this.sprite,this.x,this.y,this.w,this.h);
    }
}