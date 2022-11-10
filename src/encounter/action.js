import { DiceRoll } from "../dice.js";
import { enemy } from "./enemy.js";
import { Player } from "./player.js";

/*  lightAttack
    enemy obj | target      -- Vilket motståndare som ska attackeras
*/
export function lightAttack(target){
    roll = new DiceRoll(6, 0);
    if(roll % 2 === 0){
        target.takeDmg(new DiceRoll(6, 0));
        // skriv i dialog "Du träffar med din lätta attack"
    }
    // skriv i dialog "Miss"
}

/*  heavyAttack
    enemy obj | target      -- Vilket motståndare som ska attackeras
*/
export function heavyAttack(target){
    roll = new DiceRoll(6, 0)
    if(roll >= 5){
        target.takeDmg(new DiceRoll(6, 5));
        // skriv i dialog "Du träffar med din hårda attack"
    }
    // skriv i dialog "Miss"
}

/* enemyAttack
    player obj | target      -- Vilket motståndare som ska attackeras
*/
export function enemyAttack(target){
    roll = new DiceRoll(6, 0)
    if(roll % 2 != 0){
        target.takeDmg(new DiceRoll(6, 0));
        // skriv i dialog "Du blir träffad av motståndarens attack"
    }
    // skriv i dialog "Motståndaren missar"
}