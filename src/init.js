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
            turn = 1;
            reRolls = 3;
            reRoll(diceBag);
            break;

        case "combatEncounter":
            let done = new Button('button',canvas.width*0,canvas.height*0.7,canvas.width*0.5,(canvas.width*0.4)/3);

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
                enemyAttack(player);
                turn = 1;
            }

            for(i=diceBag.length-1;i>=0;--i){
                diceBag[i].draw((i+1)/10,0.5);
            }


            ctx.fillText(enemy.hp+"/"+enemy.maxHp, canvas.width*0.05, canvas.height*0.05); 
            ctx.fillText(player.hp+"/"+player.maxHp, canvas.width*0.92, canvas.height*0.64);
            buttons = [done];
            enemy.draw();
            
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