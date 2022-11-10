import { canvas } from "./const.js";
import { mouseOn } from "./util.js";

export let door1 = new Image();
door1.src = "assets/img/dooropen.png";  //door option 1
export let door2 = new Image();
door2.src = "assets/img/dooropen.png";  //door option 1

export let posDoor1 = {x: 0, y: 0, w: canvas.width * 0.75, h: canvas.width * 0.75}; // OG size of the img is 358
export let posDoor2 = {x: 0, y: 0, w: canvas.width * 0.75, h: canvas.width * 0.75}; // OG size of the img is 500

export function point() {
    posDoor1.x = (canvas.width - posDoor1.w) / 3;
    posDoor1.y = (canvas.height - posDoor1.h) / 3;

    posDoor2.x = (canvas.width - posDoor2.w) / 3 * 2;
    posDoor2.y = (canvas.height - posDoor2.h) / 3;

    if(mouseOn(posDoor1)) {
        door1.src = "assets/img/dooropen.png";
    } else {
        door1.src = "assets/img/doorclosed.png";
    }
    if(mouseOn(posDoor2)) {
        door2.src = "assets/img/dooropen.png";
    } else {
        door2.src = "assets/img/doorclosed.png";
    }
}