import { draw } from "./draw.js";
import { resizeCanvas } from "./util.js";


window.onload = init();

// Runs on game launch
function init() {
    resizeCanvas();
    

    window.requestAnimationFrame(gameLoop);
}

function gameLoop() {


    draw();
    window.requestAnimationFrame(gameLoop);
}

function menuLoop() {

    window.requestAnimationFrame(menuLoop);
}