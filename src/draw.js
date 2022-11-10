import { canvas, ctx } from "./const.js";
import { dialogueBox } from "./dialogueBox.js";

/**
 * Draw everything on the canvas
 */ 
export function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Draw shit here



    if(dialogueBox.dialogue) {
        dialogueBox.drawBox();
    }
}