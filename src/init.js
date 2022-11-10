
import { Button } from "./button/button.js";
import { ctx } from "./const.js";
import { mouse } from "./controls.js";
import { dialogueBox, DialogueBox } from "./dialogueBox.js";
import { clearCanvas, draw } from "./draw.js";
import { ctxSettings, resizeCanvas } from "./util.js";
import { Combat } from "./encounter/combat.js";
import { Enemy } from "./encounter/enemy.js";
import { Player } from "./encounter/player.js";

let player = new Player(10);
let enemy = new Enemy(10, "idk");

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
            "Insert intro dialogue 1",
            "Insert intro dialogue 2",
            "Insert intro dialogue 3"
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
            let doorButton = new Button(canvas.width*0.2,canvas.height*0.2,100,180);
            let boxButton = new Button(canvas.width*0.8 - 220,canvas.height*0.3,220,160);

            doorButton.onClick = () => {
                if(!heldItem) {
                    dialogueBox.startDialogue([
                        "(You pull the door handle)",
                        "(The door is locked)"
                    ]);
                }

                else if(heldItem == "Crowbar") {
                    dialogueBox.startDialogue([
                        "(You break open the door)",
                    ])
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

            doorButton.update();
            doorButton.draw();
            boxButton.update();
            boxButton.draw();

            break;
        case "ce":
            draw();
            let lightButton = new Button(canvas.width*0.8,canvas.height*0.8,400,100);
            let heavyButton = new Button(canvas.width*0.3,canvas.height*0.8,400,100);

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