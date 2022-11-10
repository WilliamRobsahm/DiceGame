//==================================================
// Variables
//==================================================
let player = new Player(10);
let enemy = null;


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
// Start menu
//==================================================
function init() {
    resizeCanvas();

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
            "(You wake up on a cold stone floor)",
            "'Woah!'",
            "'Where am I?'",
            "'This is not my bedroom...'",
            "'THIS IS A PRISON CELL!'",
            "'I gotta get out of here!'",
            "'There's a crate on the floor, I wonder who sent me that.'"
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

    buttons = [];

    switch(gameScene) {
        case "Intro":
            break;

        case "PrisonCell":
            //==================================================
            // Creates prisonCellDoor and prisonCellBox
            //==================================================
            let prisonCellDoor = new Button('door',canvas.width*0.2,canvas.height*0.2,300,300);         
            let prisonCellBox = new Button('box',canvas.width*0.8 - 220,canvas.height*0.3,300,300);
            
            let testButton = new Button("button",canvas.width*0.8,canvas.height*0.3,20,20); //!!!!!!!!!!!! test button should not be here in final version

            buttons = [prisonCellDoor, prisonCellBox, testButton]; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! test button should not be here in final version



            //==================================================
            // prisonCellDoor
            //==================================================
            prisonCellDoor.onClick = () => {
                if(!heldItem) {
                    dialogueBox.startDialogue([
                        "(You pull the door handle)",
                        "'The door is locked, I need something to get it open.'"
                    ]);
                }
                else if(heldItem == "Crowbar") {
                    changeState('door')

                    dialogueBox.startDialogue([
                        "(You manage to break open the door)",
                        "'Yes!'",
                        "'I knew the crowbar would help me, now I can get out of here.'"
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
                        "(You open the box)",
                        "(There is a crowbar inside)",
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
                "Player: 'Hey, you! I need your help to get out!'",
                "Guard: 'How did you escape your cell? Oh whatever. Look, let me think...'",
                "Guard: 'You know what?'",
                "'Let me see if I like your style, and maybe I'll let you through.'"
            ]);
            dialogueBox.onFinish = () => {
                enemy = new Enemy(10,"idk");
                enemy.dialogueOptions = new encounter1;
                gameScene = "encounter";
            }
            break;

        case "testEnemy":
            console.log("hej");
            enemy = new Enemy(10, "idk");
            gameScene = "combatEncounter";
            break;
        case "combatEncounter":

            let lightButton = new Button('button',(canvas.width*1)-(canvas.width*0.5),canvas.height*0.7,canvas.width*0.5,(canvas.width*0.5)/3);
            let heavyButton = new Button('button',canvas.width*0,canvas.height*0.7,canvas.width*0.5,(canvas.width*0.5)/3);
            
            turn = 1;

            dialogueBox.onFinish = () => {
                gameScene = "combatEncounter";
            }

            lightButton.onClick = () => {
                if(turn == 1){
                    lightAttack(enemy);
                    turn == 0;
                }
            }

            heavyButton.onClick = () => {
                if(turn == 1){
                    heavyAttack(enemy);
                    turn == 0;
                }
            }

            if (turn == 0){
                enemyAttack(player);
                turn == 1;
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


            lightButton.update();
            lightButton.draw();
            heavyButton.update();
            heavyButton.draw();
            
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
                let button1 = new Button('dialogue',canvas.width / 2 - 520,canvas.height * 0.5,320,240);
                let button2 = new Button('dialogue',canvas.width / 2 - 160,canvas.height * 0.5,320,240);
                let button3 = new Button('dialogue',canvas.width / 2 + 200,canvas.height * 0.5,320,240);
            
                buttons = [button1, button2, button3];

                for(let i=0;i<buttons.length;i++) {
                    buttons[i].setDialogue(currentSituation.options[i].text);
                }
            }
            break;
    }

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