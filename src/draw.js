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
        diceAtk:image('assets/img/diceatk.png'),
        diceDef:image('assets/img/dicedef.png'),
        diceHeal:image('assets/img/diceheal.png'),
        diceNeg:image('assets/img/diceneg.png'),
        door:image('assets/img/doorclosed.png'),
        openDoor:image('assets/img/dooropen.png'),
        crate:image('assets/img/boxclosed.png'),
        openCrate:image('assets/img/boxopen.png'),
        button:image('assets/img/button.png'),
        buttonDown:image('assets/img/buttondown.png'),
        dialogueBox:image("assets/img/dialougebox.png"),
        dice1:image("assets/img/dice1.png"),
        dice2:image("assets/img/dice2.png"),
        dice3:image("assets/img/dice3.png"),
        dice4:image("assets/img/dice4.png"),
        dice5:image("assets/img/dice5.png"),
        dice6:image("assets/img/dice6.png"),
    }
}

function preloadSounds() {
    sounds = {

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
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        diceRoll.drawDice();
    }
}