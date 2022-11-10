import { dialogueBox, DialogueBox } from "./dialogueBox.js";
import { draw } from "./draw.js";
import { resizeCanvas } from "./util.js";


window.onload = init();



// Runs on game launch
function init() {
    resizeCanvas();
    dialogueBox.setSize();
    
    dialogueBox.startDialogue([
        "This is a dialogue",
        "Cheesed to meet you.",
        "I eated sope"
    ])

    window.requestAnimationFrame(gameLoop);
}

function gameLoop() {


    draw();
    window.requestAnimationFrame(gameLoop);
}

function menuLoop() {

    window.requestAnimationFrame(menuLoop);
}