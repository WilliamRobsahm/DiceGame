
/*  lightAttack
    enemy obj | target      -- Vilket motståndare som ska attackeras
*/
function lightAttack(target){
    roll = new DiceRoll(6, 0);
    if(roll.finalResult % 2 === 0){
        rollD = new DiceRoll(6, 0);
        target.takeDmg(rollD.finalResult);
        dialogueBox.startDialogue([
            "Hit for "+rollD.finalResult+" damage"
        ]);
    }else{
        dialogueBox.startDialogue([
            "Miss"
        ]);
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
        dialogueBox.startDialogue([
            "Hit for "+rollD.finalResult+" damage"
        ]);
    }else{
        dialogueBox.startDialogue([
            "Miss"
        ]);
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
        dialogueBox.startDialogue([
            "You got hit for "+rollD.finalResult+" damage"
        ]);
    }else{
        dialogueBox.startDialogue([
            "They missed"
        ]);
    }
}