
/*  lightAttack
    enemy obj | target      -- Vilket motståndare som ska attackeras
*/
function lightAttack(target){
    roll = new DiceRoll(6, 0);
    if(roll.finalResult % 2 === 0){
        rollD = new DiceRoll(6, 0);
        target.takeDmg(rollD.finalResult);
        // skriv i dialog "Du träffar med din lätta attack"
    }else{
        alert("miss");
    }
    
}

/*  heavyAttack
    enemy obj | target      -- Vilket motståndare som ska attackeras
*/
function heavyAttack(target){
    roll = new DiceRoll(6, 0)
    if(roll.finalResult >= 5){
        rollD = new DiceRoll(6, 5);
        target.takeDmg(rollD.finalResult);
        // skriv i dialog "Du träffar med din hårda attack"
    }else{
        alert("miss");
    }
}

/* enemyAttack
    player obj | target      -- Vilket motståndare som ska attackeras
*/
function enemyAttack(target){
    roll = new DiceRoll(6, 0)
    if(roll.finalResult % 2 != 0){
        rollD = new DiceRoll(6, 0);
        target.takeDmg(rollD.finalResult);
        // skriv i dialog "Du blir träffad av motståndarens attack"
    }else{
        alert("miss");
    }
}