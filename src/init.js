let player = new Player(10);
let enemy = new Enemy(10, "idk");

window.onload = init();


let gameScene = "Intro";

let heldItem = null;
let dialogueOptions = null;

let currentSituation = null;

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
<<<<<<< HEAD
            
            let doorButton = new Button(canvas.width*0.2,canvas.height*0.2,100,180);
            let boxButton = new Button(canvas.width*0.8 - 220,canvas.height*0.3,220,160);
=======
            draw();
            let doorButton = new Button('door',canvas.width*0.2,canvas.height*0.2,300,300);         
            let boxButton = new Button('box',canvas.width*0.8 - 220,canvas.height*0.3,300,300);
>>>>>>> fc9dfdeb3845d3c6bcc3ace9d6e0596d5740909e

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
                        dialogueOptions = new encounter1();
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

            draw();
            doorButton.update();
            doorButton.draw();


            boxButton.update();
            boxButton.draw();

            break;

        case "Test Encounter":
            if(!currentSituation) {
                currentSituation = dialogueOptions.chooseSituation();

                dialogueBox.startDialogue(currentSituation.dialogue);
                dialogueBox.onFinish = () => {
                    
                }
            }
            draw();

        case "ce":
            draw();
            let lightButton = new Button('button',canvas.width*0.8,canvas.height*0.8,400,100);
            let heavyButton = new Button('button',canvas.width*0.3,canvas.height*0.8,400,100);

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