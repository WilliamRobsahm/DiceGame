import { draw } from "./draw.js";
import { Combat } from "./encounter/combat.js";
import { Enemy } from "./encounter/enemy.js";
import { Player } from "./encounter/player.js";
import { resizeCanvas } from "./util.js";

player = new Player(10);
enemy = new Enemy(10, "idk");

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