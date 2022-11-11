let images;
let sounds;

function clearCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

const image = (src) => {
    let img = new Image;
    img.src = src;
    return img;
}

function preloadImages() {
    images = {
        bg:image('assets/img/room.png'),
        emptyBg:image('assets/img/empty room.png'),
        door:image('assets/img/doorclosed.png'),
        openDoor:image('assets/img/dooropen.png'),
        doorHighLight:image('assets/img/doorclosedhighlight.png'),
        openDoorHighLight:image('assets/img/dooropenhighlight.png'),
        box:image('assets/img/boxclosed.png'),
        openBox:image('assets/img/boxopen.png'),
        boxHighLight:image('assets/img/boxclosedhighlight.png'),
        openBoxHighLight:image('assets/img/boxopenhighlight.png'),
        button:image('assets/img/button.png'),
        buttonDown:image('assets/img/buttondown.png'),
        dialogueBox:image("assets/img/dialougebox.png"),
        guard:image("assets/img/guard.png"),
    }
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