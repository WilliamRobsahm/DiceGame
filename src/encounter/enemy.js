/* Enemy
    int | hp            -- Hp of enemy for combat
    img obj | sprite    -- Sprite för motsåndare
*/
class Enemy{
    constructor(hp, sprite){
        this.hp = hp;
        this.sprite = sprite;
        this.alive = true;
    }
    takeDmg(dmg){
        this.hp = this.hp-dmg;
        if(this.hp <= 0){
            this.alive = false;
        }
        console.log("hp:"+this.hp);
    }
}