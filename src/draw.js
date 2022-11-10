import { Button } from "./button/button.js";
import { canvas, ctx } from "./const.js";
import { Combat } from "./encounter/combat.js";

/**
 * Draw everything on the canvas
 */ 
export function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

}