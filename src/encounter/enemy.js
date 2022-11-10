/* Enemy
    int | hp            -- Hp of enemy for combat
    img obj | sprite    -- Sprite för motsåndare
*/
export class Enemy{
    constructor(hp, sprite){
        this.hp = hp;
        this.sprite = sprite;
    }
    takeDmg(dmg){
        this.hp-dmg;
        if(this.hp <= 0){
            alert("Motståndaren dog");
        }
    }
}