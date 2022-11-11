/* reRoll
    array   | dice      -- Lista på alla tärningar som ska rullas om
*/
function reRoll(dice){
    for(i = dice.length-1;i>=0;--i){
        dice[i].roll();
    }
}

/* enemyAttack
    array   | dice      -- Lista på alla tärningar som ska rullas om
*/
//function enemyAttack(dice){
//    for(i = dice.length;i>=0;--i){
//        dice[i].roll();
//    } 
    
//}