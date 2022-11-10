let player = new Player(10);
let enemy = "";

window.onload = init();


let gameScene = "Intro";

let heldItem = null;

// Runs on game launch
function init() {
    resizeCanvas();

    dialogueBox.setSize();

    ctxSettings({fillStyle:"white",font:"40px Sketchy",textAlign:"center"});
    ctx.fillText("Click to start",canvas.width / 2,canvas.height/2);
    window.requestAnimationFrame(introLoop);
}

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
            gameScene = "Intro Door";
        }

        mouse.click = false;
        window.requestAnimationFrame(gameLoop);
    } else {
        window.requestAnimationFrame(introLoop);
    }

}

function gameLoop() {
    clearCanvas();
    switch(gameScene) {
        case "Intro":
            draw();
            break;
        case "Intro Door":
            draw();
            
            let doorButton = new Button("door",canvas.width*0.2,canvas.height*0.2,100,180);
            let boxButton = new Button("box",canvas.width*0.8 - 220,canvas.height*0.3,220,160);
            let testButton = new Button("box",canvas.width*0.8,canvas.height*0.3,20,20);

            doorButton.onClick = () => {
                if(!heldItem) {
                    dialogueBox.startDialogue([
                        "(You pull the door handle)",
                        "'The door is locked, I need something to get it open.'"
                    ]);
                }

                else if(heldItem == "Crowbar") {
                    dialogueBox.startDialogue([
                        "(You manage to break open the door)",
                        "'Yes!'",
                        "'I knew the crowbar would help me, now I can get out of here.'"
                    ]);

                    dialogueBox.onFinish = () => {
                        gameScene = "Test Encounter";
                    }
                }
            };

            boxButton.onClick = () => {

                if(!heldItem) {
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

            doorButton.update();
            doorButton.draw();


            boxButton.update();
            boxButton.draw();
            testButton.update();
            testButton.draw();

            break;

        case "Test Encounter":
            break;

        case "testEnemy":
            console.log("hej");
            enemy = new Enemy(10, "idk");
            gameScene = "combatEncounter";
            break;
        case "combatEncounter":
            draw();

            let lightButton = new Button("box",canvas.width*0.5,canvas.height*0.6,300,100);
            let heavyButton = new Button("box",canvas.width*0.1,canvas.height*0.6,300,100);
            
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
                    gameScene = "Intro Door";
                }
                dialogueBox.startDialogue([
                    "You Died"
                ]);
            }
            if(enemy.alive == false){
                dialogueBox.onFinish = () => {
                    gameScene = "Intro Door";
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
    }

    window.requestAnimationFrame(gameLoop);
}

function menuLoop() {

    window.requestAnimationFrame(menuLoop);
}