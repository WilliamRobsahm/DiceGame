import { enemy } from "./enemy";
import { Player } from "./player";


export function lightAttack(){
    roll =""; //rolldie
    if(roll % 2 === 0){
        Enemy.takeDmg(/*rolldie*/);
        // skriv i dialog "Du träffar med din lätta attack"
    }
    // skriv i dialog "Miss"
}

export function heavyAttack(){
    roll =""; //rolldie
    if(roll >= 5){
        Enemy.takeDmg(/*rolldie+5*/);
        // skriv i dialog "Du träffar med din hårda attack"
    }
    // skriv i dialog "Miss"
}

export function enemyAttack(){
    roll =""; //rolldie
    if(roll % 2 != 0){
        Enemy.takeDmg(/*rolldie*/);
        // skriv i dialog "Du blir träffad av motståndarens attack"
    }
    // skriv i dialog "Motståndaren missar"
}