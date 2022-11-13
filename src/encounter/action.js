/* reRoll
    array   | dice      -- Lista på alla tärningar som ska rullas om
*/
function reRoll(dice,frameCounter,framesPerNumber,animationLength,frame,reRolling){
    frameCounter++;
        if(frameCounter>=framesPerNumber){
            frame++
            for(i = dice.length-1;i>=0;--i){
                dice[i].roll();
            }
            if(frame>=animationLength){
                frame = 0;
                frameCounter = 0;
                reRolling = false;
            }
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