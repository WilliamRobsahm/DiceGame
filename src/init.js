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


let prisonCell = {Create: false, Box: false};
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
            let prisonCellDoor = new DoorButton(canvas.width*0.2,canvas.height*0.2,300,300);         
            let prisonCellBox = new BoxButton(canvas.width*0.8 - 220,canvas.height*0.3,300,300);
            
            let testButton = new Button(canvas.width*0.8,canvas.height*0.3,20,20); //!!!!!!!!!!!! test button should not be here in final version

            buttons = [prisonCellDoor, prisonCellBox, testButton]; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! test button should not be here in final version

            //==================================================
            // prisonCellDoor
            //==================================================
            prisonCellDoor.onClick = () => {
                if(!heldItem) {
                    dialogueBox.startDialogue([
                        {character:"",text:"(You pull the door handle)"},
                        {character:"",text:"(The door is locked)"},
                    ]);
                }

                else if(heldItem == "Crowbar") {
                    changeState('door')

                    dialogueBox.startDialogue([
                        {character:"",text:"(You manage to break open the door)"},
                        {character:"You",text:"'Yes!'"},
                        {character:"You",text:"'I knew the crowbar would help me, now I can get out of here.'"},
                    ]);
                    dialogueBox.onFinish = () => {
                        gameScene = "Test Encounter";
                        dialogueOptions = new encounter1();
                    }
                }
            };



            //==================================================
            // prisonCellBox
            //==================================================
            prisonCellBox.onClick = () => {
                if(!heldItem) {
                    changeState('box')

                    dialogueBox.startDialogue([
                        {character:"",text:"(You open the box)"},
                        {character:"",text:"(There is a crowbar inside)"},
                    ]);
                    
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
                enemy = new Enemy(10,"idk");
                enemy.dialogueOptions = new encounter1;
                gameScene = "encounter";
            }
            break;

        case "testEnemy":
            document.body.style.cursor = "default";
            enemy = new Enemy(10, "idk");
            gameScene = "combatEncounter";
            turn = 1;
            reRolls = 3;
            reRoll(diceBag);
            enemyDmg = Math.floor(Math.random() * this.sides);
            enemyBlock = 6-enemyDmg;
            break;

        case "combatEncounter":
            let done = new CombatButton(canvas.width*0,canvas.height*0.7,canvas.width*0.5,(canvas.width*0.4)/3);
            let roll = new CombatButton(canvas.width*0.5,canvas.height*0.7,canvas.width*0.5,(canvas.width*0.4)/3);

            let one = new DiceButton(canvas.width*0.2,canvas.height*0.5,canvas.width*0.1,canvas.width*0.1,0);
            let two = new DiceButton(canvas.width*0.3,canvas.height*0.5,canvas.width*0.1,canvas.width*0.1,1);
            let three = new DiceButton(canvas.width*0.4,canvas.height*0.5,canvas.width*0.1,canvas.width*0.1,2);
            let four = new DiceButton(canvas.width*0.5,canvas.height*0.5,canvas.width*0.1,canvas.width*0.1,3);
            let five = new DiceButton(canvas.width*0.6,canvas.height*0.5,canvas.width*0.1,canvas.width*0.1,4);
            let six = new DiceButton(canvas.width*0.7,canvas.height*0.5,canvas.width*0.1,canvas.width*0.1,5);
            buttons = [];
            diceButtons = [];
            reRollDice = [];
            buttons.push(one,two,three,four,five,six,done,roll);
            diceButtons.push(one,two,three,four,five,six);

            dialogueBox.onFinish = () => {
                gameScene = "combatEncounter";
            }

            

            if(player.alive == false){
                dialogueBox.onFinish = () => {
                    gameScene = "PrisonCell";
                }
                dialogueBox.startDialogue([
                    "You Died"
                ]);
            }
            if(enemy.alive == false){
                dialogueBox.onFinish = () => {
                    gameScene = "PrisonCell";
                }
                dialogueBox.startDialogue([
                    "They Died"
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
                        reRollDice.push(diceButtons[i]);
                    }
                    mouse.click = false;
                }
                
            }
            
            roll.onClick = () => {
                if(reRolls > 0){
                    for(let i=reRollDice.length-1;i>=0;i--){
                        
                    }
                    reRoll(reRollDice);
                    reRollDice = [];
                }
                
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
                if (dmg > 0){
                    dmgDone = enemy.takeDmg(dmg-enemyBlock);
                    alert("U attack for "+dmgDone);
                    
                }
                if (heal > 0){
                    healDone = player.heal(heal);
                    alert("U heal for "+healDone);
                }
                if (def > 0){
                    dmgDone = player.takeDmg(enemyDmg-def);
                    alert("U take "+dmgDone+" damage");
                }
                if (neg > 0){
                    dmgDone = player.takeDmg(neg);
                    alert("U take "+dmgDone+" damage from recoil");
                }
                turn = 0;
            };

            if (turn == 0){
                turn = 1;
                reRolls = 3;
                reRoll(diceBag);
                enemyDmg = Math.floor(Math.random() * this.sides);
                enemyBlock = 6-enemyDmg;
            }

            //for(i=diceBag.length-1;i>=0;--i){
            //    diceBag[i].draw((i+1)/10,0.5);
            //}

            ctx.fillText(enemy.hp+"/"+enemy.maxHp, canvas.width*0.05, canvas.height*0.05); 
            ctx.fillText(player.hp+"/"+player.maxHp, canvas.width*0.92, canvas.height*0.64);
            for(let i=buttons.length-1;i>=0;--i){
                buttons[i].draw();
                buttons[i].update();
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
                let option1 = new DialogueButton(canvas.width / 2 - 520,canvas.height * 0.6,320,240);
                let option2 = new DialogueButton(canvas.width / 2 - 160,canvas.height * 0.6,320,240);
                let option3 = new DialogueButton(canvas.width / 2 + 200,canvas.height * 0.6,320,240);
            
                buttons = [option1, option2, option3];

                option1.onClick = () => {
                    diceRoll = new DiceRoll(6,0,2);
                }

                for(let i=0;i<buttons.length;i++) {
                    buttons[i].setOption(currentSituation.options[i]);
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