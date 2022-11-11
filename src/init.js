//==================================================
// Variables
//==================================================
let player = new Player(10);
let turn = 1;
let reRolls = 3;
let enemy = null;

let jackDie = [
    "def",
    "def",
    "atc",
    "atc",
    "heal",
    "neg"
];

let enemyDie = [
    "def",
    "def",
    "atc",
    "atc",
    "atc",
    "neg"
];

let diceBag = [];
let a = new die(6, jackDie);
let b = new die(6, jackDie);
let c = new die(6, jackDie);
let d = new die(6, jackDie);
let e = new die(6, jackDie);
let f = new die(6, jackDie);
diceBag.push(a,b,c,d,e,f);

let eDiceBag = [];
let g = new die(6, enemyDie);
let h = new die(6, enemyDie);
let i = new die(6, enemyDie);
let j = new die(6, enemyDie);
let k = new die(6, enemyDie);
let l = new die(6, enemyDie);
eDiceBag.push(a,b,c,d,e,f);


let gameScene = "Intro";
let buttons = [];


let heldItem = null;
let dialogueOptions = null;


let currentSituation = null;
let showDialogueOptions = false;

let diceSum;


let prisonCell = {Door: false, Box: false};
let prisonCellDoor = '';
let prisonCellBox = '';



//==================================================
// Game starts when page have loaded in
//==================================================
window.onload = init();



//==================================================
// Runs on game launch
//==================================================
function init() {
    resizeCanvas();
    preloadImages();

    dialogueBox.setSize();

    ctxSettings({fillStyle:"white",font:"40px Sketchy",textAlign:"center"});
    ctx.fillText("Click to start",canvas.width / 2,canvas.height/2);
    window.requestAnimationFrame(introLoop);
}



//==================================================
// Start menu
//==================================================
function introLoop() {
    if(mouse.click) {
        dialogueBox.startDialogue([
            {character:"",text:"(You wake up on a cold stone floor)"},
            {character:"You",text:"'Woah!'"},
            {character:"You",text:"'Where am I?'"},
            {character:"You",text:"'This is not my bedroom...'"},
            {character:"You",text:"'THIS IS A PRISON CELL!'"},
            {character:"You",text:"'I gotta get out of here!'"},
        ])
    
        dialogueBox.onFinish = () => {
            gameScene = "PrisonCell";
        }

        window.requestAnimationFrame(gameLoop);
    } else {
        window.requestAnimationFrame(introLoop);
    }

}



//==================================================
// GameLoop
//==================================================
function gameLoop() {
    clearCanvas();
    document.body.style.cursor = "default";

    buttons = [];
    
    switch(gameScene) {
        case "Intro":
            break;

        case "PrisonCell":
            //==================================================
            // Creates prisonCellDoor and prisonCellBox
            //==================================================
            ctx.drawImage(images.bg,(((canvas.height/0.5625)-canvas.width)/2)*-1,0,canvas.height/0.5625,canvas.height);
            if(prisonCell.Door) {
                prisonCellDoor = new DoorButton((canvas.width-(750/1.75))*0.43,(canvas.height-(716/1.75))*0.29,750/1.75,716/1.75);
            } else {
                prisonCellDoor = new DoorButton((canvas.width-(750/1.75))*0.43,(canvas.height-(716/1.75))*0.29,396/1.75,716/1.75);         
            }
            prisonCellBox = new BoxButton(canvas.width*0.55,canvas.height*0.46,750/2.5,458/2.5);
            
            let testButton = new Button(canvas.width*0.8,canvas.height*0.3,20,20); //!!!!!!!!!!!! test button should not be here in final version

            buttons = [prisonCellDoor, prisonCellBox, testButton]; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! test button should not be here in final version

            //==================================================
            // prisonCellDoor
            //==================================================
            prisonCellDoor.onClick = () => {

                // If door is open when clicked, go to next scene
                if(prisonCell.Door) {
                    gameScene = "Test Encounter";
                    dialogueOptions = new encounter1();
                }

                // If player hasn't opened box, the door remains locked
                else if(!heldItem) {
                    dialogueBox.startDialogue([
                        {character:"",text:"(You pull the door handle)"},
                        {character:"",text:"(The door is locked)"},
                    ]);
                }

                // If player has opened box, the door is opened
                else if(heldItem == "Crowbar") {
                    changeState('door')

                    dialogueBox.startDialogue([
                        {character:"",text:"(You manage to break open the door)"},
                        {character:"You",text:"'Yes!'"},
                        {character:"You",text:"'I knew the crowbar would help me, now I can get out of here.'"},
                    ]);
                }
                mouse.click = false;
            };



            //==================================================
            // prisonCellBox
            //==================================================
            prisonCellBox.onClick = () => {

                // Box can only be opened once
                if(!heldItem) {
                    changeState('box')

                    dialogueBox.startDialogue([
                        {character:"",text:"(You open the box)"},
                        {character:"",text:"(There is a crowbar inside)"},
                    ]);
                    
                    // Give player 'Crowbar', allowing them to open the door
                    heldItem = "Crowbar";
                }
            };

            testButton.onClick = () => {
                gameScene = "testEnemy";
            }


            break;

        case "Test Encounter":
            dialogueBox.startDialogue([
                {character:"You",text:"'Hey, you! I need your help to get out!'"},
                {character:"Guard",text:"'How did you escape your cell? Oh whatever. Look, let me think...'"},
                {character:"Guard",text:"'You know what?'"},
                {character:"Guard",text:"'Let me see if I like your style, and maybe I'll let you through.'"},
            ]);
            dialogueBox.onFinish = () => {
                enemy = new Enemy(10,'images.guard',(canvas.width-canvas.height/3*2)/2,0,canvas.height/3*2,canvas.height/3*2);
                enemy.dialogueOptions = new encounter1;
                gameScene = "encounter";
            }
            break;

        case "testEnemy":
            document.body.style.cursor = "default";
            enemy = new Enemy(10,images.guard,(canvas.width-canvas.height/3*2)/2,0,canvas.height/3*2,canvas.height/3*2);
            enemy.draw();
            gameScene = "combatEncounter";
            reRollDice = [];
            turn = 1;
            reRolls = 3;
            reRoll(diceBag);
            enemyDmg = Math.floor(Math.random() * 6);
            enemyBlock = 6-enemyDmg;
            console.log(enemyDmg);
            console.log(enemyBlock);
            break;

        case "combatEncounter":
            let done = new CombatButton(canvas.width*0,canvas.height*0.7,canvas.width*0.5,(canvas.width*0.4)/3,"Engage");
            let roll = new CombatButton(canvas.width*0.5,canvas.height*0.7,canvas.width*0.5,(canvas.width*0.4)/3,"Reroll");

            let one = new DiceButton(canvas.width*0.2,canvas.height*0.5,canvas.width*0.1,canvas.width*0.1,0);
            let two = new DiceButton(canvas.width*0.3,canvas.height*0.5,canvas.width*0.1,canvas.width*0.1,1);
            let three = new DiceButton(canvas.width*0.4,canvas.height*0.5,canvas.width*0.1,canvas.width*0.1,2);
            let four = new DiceButton(canvas.width*0.5,canvas.height*0.5,canvas.width*0.1,canvas.width*0.1,3);
            let five = new DiceButton(canvas.width*0.6,canvas.height*0.5,canvas.width*0.1,canvas.width*0.1,4);
            let six = new DiceButton(canvas.width*0.7,canvas.height*0.5,canvas.width*0.1,canvas.width*0.1,5);
            let cButtons = [];
            let diceButtons = [];
            
            cButtons.push(one,two,three,four,five,six,done,roll);
            diceButtons.push(one,two,three,four,five,six);
            
            dialogueBox.onFinish = () => {
                gameScene = "combatEncounter";
            }

            

            if(player.alive == false){
                dialogueBox.onFinish = () => {
                    gameScene = "Intro";
                    player.hp = player.maxHp;
                    player.alive = true;
                }
                dialogueBox.startDialogue([
                    {character:"",text:"(You died)"},
                ]);
            }
            if(enemy.alive == false){
                dialogueBox.onFinish = () => {
                    gameScene = "PrisonCell";
                }
                dialogueBox.startDialogue([
                    {character:"",text:"(They died)"},
                ]);
            }
            for(let i = 0;i<diceButtons.length;i++){
                diceButtons[i].onClick = () => {
                    console.log(i+" "+diceButtons);
                    if (diceButtons[i].clicked){
                        diceButtons[i].clicked == false;
                        for(x = reRollDice.length;x>=0;--x){
                            if(reRollDice[x] == diceButtons[i]){
                                reRollDice[i].splice(i,1);
                            }
                        }
                    }
                    else{
                        diceButtons[i].clicked == true;
                        reRollDice.push(diceBag[diceButtons[i].diceBagSpot]);
                        console.log(reRollDice);
                    }
                    mouse.click = false;
                }
                
            }
            
            roll.onClick = () => {
                if(reRolls > 0){
                    let temp = [];
                    console.log(reRollDice);
                    for(let i=reRollDice.length-1;i>=0;i--){
                        
                        temp.push(reRollDice[i]);
                        reRollDice[i].clicked = false;
                    }
                    
                    reRoll(temp);
                    reRolls--;
                    reRollDice = [];
                }
                
                mouse.click = false;
                
            }

            done.onClick = () => {
                let dmg = 0;
                let def = 0;
                let heal = 0;
                let neg = 0;
                diceBag.forEach(i => {
                    if(i.die[i.sideUp] == "atc"){
                        dmg ++;
                    }
                    if(i.die[i.sideUp] == "def"){
                        def ++;
                    }
                    if(i.die[i.sideUp] == "heal"){
                        heal ++;
                    }
                    if(i.die[i.sideUp] == "neg"){
                        neg ++;
                    }
                });
                dialogueBox.onFinish = () => {
                    gameScene = "";
                }
                anwser = [];
                if (dmg > 0){
                    dmgDone = enemy.takeDmg(dmg-enemyBlock);
                    anwser.push({character:"",text:"(You deal "+dmgDone+" damage)"});
                    
                }
                if (heal > 0){
                    healDone = player.heal(heal);
                    anwser.push({character:"",text:"(You heal for "+healDone+")"});
                }
                if (def > 0){
                    dmgDone = player.takeDmg(enemyDmg-def);
                    anwser.push({character:"",text:"(You take "+dmgDone+")"});
                }
                if (neg > 0){
                    dmgDone = player.takeDmg(neg);
                    anwser.push({character:"",text:"(You take "+dmgDone+" from recoil)"});
                }
                dialogueBox.startDialogue(anwser);
                console.log(player.alive);
                turn = 0;
                mouse.click = false;
            };

            if (turn == 0){
                turn = 1;
                reRolls = 3;
                reRoll(diceBag);
                enemyDmg = Math.floor(Math.random() * 6);
                enemyBlock = 6-enemyDmg-Math.floor(Math.random() * 3);
            }

            enemy.draw();

            ctx.fillText(enemy.hp+"/"+enemy.maxHp, canvas.width*0.05, canvas.height*0.05); 
            ctx.fillText("Enemy Attack: "+enemyDmg+" Enemy Block: "+enemyBlock, canvas.width*0.1, canvas.height*0.05);  
            ctx.fillText(player.hp+"/"+player.maxHp, canvas.width*0.92, canvas.height*0.64);
            ctx.fillText("Rerolls Left: "+reRolls, canvas.width*0.8, canvas.height*0.64);
            for(let i=cButtons.length-1;i>=0;--i){
                cButtons[i].draw();
                cButtons[i].update();
            }
            
            break;
            
        case "encounter":
            if(!currentSituation) {
                currentSituation = enemy.dialogueOptions.randomSituation();

                dialogueBox.startDialogue(currentSituation.dialogue);
                dialogueBox.onFinish = () => {
                    showDialogueOptions = true;
                }
            }
            
            if(showDialogueOptions) {
                ctx.drawImage(images.emptyBg,(((canvas.height/0.5625)-canvas.width)/2)*-1,0,canvas.height/0.5625,canvas.height);
                let m = canvas.width / 2;
                let y = canvas.height * 0.6;
                let buttonW = 400; // + followed + not ratio
                let spaceBetween = 32;
                let option1 = new DialogueButton(m - buttonW / 2 - buttonW - spaceBetween, y, buttonW, 240);
                let option2 = new DialogueButton(m - buttonW / 2,   y, buttonW, 240);
                let option3 = new DialogueButton(m + buttonW / 2 + spaceBetween, y, buttonW, 240);
            
                buttons = [option1, option2, option3];

                // Open dice window
                option1.onClick = () => {
                    diceRoll = new DiceRoll(6,0,4);
                    option = currentSituation.options[0];
                }

                option2.onClick = () => {
                    diceRoll = new DiceRoll(6,0,4);
                    option = currentSituation.options[1];
                }

                option3.onClick = () => {
                    diceRoll = new DiceRoll(6,0,4);
                    option = currentSituation.options[2];
                }

                for(let i=0;i<buttons.length;i++) {
                    buttons[i].setOption(currentSituation.options[i]);
                }

                // Close dice window
                if(diceRoll && diceRoll.doneRolling && mouse.click) {

                    if(diceRoll.finalResult >= option.minimumSum) {
                        console.log(option.positiveResponse);
                        dialogueBox.startDialogue(option.positiveResponse);
                    } else {
                        console.log(option.negativeResponse);
                        dialogueBox.startDialogue(option.negativeResponse);
                    }
                    dialogueBox.onFinish = () => {
                        currentSituation = null;
                        option = null;
                    }

                    diceRoll = null;
                    mouse.click = false;
                    showDialogueOptions = false;
                    buttons = [];
                }
            }
            break;
    }

    // Update and draw all buttons
    for(let i=0;i<buttons.length;i++) {
        buttons[i].update();
        buttons[i].draw();
    }

    draw();

    window.requestAnimationFrame(gameLoop);
}



//==================================================
// Opens door and box in prisonCell
//==================================================
function changeState(type) {
    if(type == 'door') {
        prisonCell.Door = true;
    }
    if(type == 'box') {
        prisonCell.Box = true;
    }
};