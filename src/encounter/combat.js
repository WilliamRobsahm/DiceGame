import { Button } from "../button/button.js";
import { enemyAttack, heavyAttack, lightAttack } from "./action.js";

/*  Combat
    player obj | player         -- Spelaren i encountern
    enemy obj  | enemy          -- Motståndare i encountern 
    int        | turn           -- 1 == "Spelaren" 0 == "Motståndaren"
*/

export class Combat{
    constructor(player,enemy){
        this.player = player;
        this.enemy = enemy;
        this.lightAttack = new Button(100,500,300,100,lightAttack(this.enemy));
        this.heavyAttack = new Button(500,500,300,100,heavyAttack(this.enemy));
        this.turn = 1;
    }
}