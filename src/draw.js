
function clearCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

/**
 * Draw everything on the canvas
 */ 
function draw() {

    // Draw shit here

    if(dialogueBox.dialogue) {
        dialogueBox.drawBox();
    }
}