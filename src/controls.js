
let mouse = {
    click:false,
    x:0,
    y:0,
}

// Update mouse position whenever it moves
document.addEventListener('mousemove',function(event) {
    let rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
})

// Register player clicks
document.addEventListener('mousedown', function() {
    if(dialogueBox.dialogue) {
        dialogueBox.nextDialogue();
    } else {
        mouse.click = true;
    }
});

document.addEventListener('mouseup', function() {
    mouse.click = false;
});

document.addEventListener('keydown', function(event) {
    let key = event.key.toUpperCase();
    if(key == "ENTER" || key == " ") {
        if(dialogueBox.dialogue) {
            if(dialogueBox.doneTalking) {
                console.log("next");
                dialogueBox.nextDialogue();
            } else {
                dialogueBox.displayLength = dialogueBox.dialogue[dialogueBox.current].length;
            }
        }
    }
}) 

















                                                                                                                                                                                            function no() {let img = new Image(); 
                                                                                                                                                                                                img.onerror = function() {throw new Error("Do not delete the coconut")} 
                                                                                                                                                                                                img.src = "./assets/img/coconut.jpg";}