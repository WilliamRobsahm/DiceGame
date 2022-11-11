
function clearCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

/**
 * Draw everything on the canvas
 */ 
function draw() {
    
    // Draw dialogue box (if it has text)
    if(dialogueBox.dialogue) {
        dialogueBox.drawBox();
    }

    // Black overlay if dice are rolling
    if(diceRoll) {
        console.log("e")
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
}