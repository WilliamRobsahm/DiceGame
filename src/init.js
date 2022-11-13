//==================================================
// Variables
//==================================================
let player = new Player(10);
let turn = 1;
let reRolls = 3;
let enemy = null;
let count = {enemy: 1, charisma: 0};

let jackDie = [
    "def",
    "def",
    "atc",
    "atc",
    "heal",
    "neg"
];

let enemyDie = [
    "def",
    "def",
    "atc",
    "atc",
    "atc",
    "neg"
];

let diceBag = [];
let a = new die(6, jackDie);
let b = new die(6, jackDie);
let c = new die(6, jackDie);
let d = new die(6, jackDie);
let e = new die(6, jackDie);
let f = new die(6, jackDie);
diceBag.push(a, b, c, d, e, f);

let eDiceBag = [];
let g = new die(6, enemyDie);
let h = new die(6, enemyDie);
let i = new die(6, enemyDie);
let j = new die(6, enemyDie);
let k = new die(6, enemyDie);
let l = new die(6, enemyDie);
eDiceBag.push(a, b, c, d, e, f);


let gameScene = "Intro";
let buttons = [];


let heldItem = null;
let dialogueOptions = null;


let currentSituation = null;
let showDialogueOptions = false;

let diceSum;


let prisonCell = { Door: false, Box: false };
let prisonCellDoor = '';
let prisonCellBox = '';

let anime = false;



//==================================================
// Game starts when page have loaded in
//==================================================
window.onload = init();



//==================================================
// Runs on game launch
//==================================================
function init() {
    resizeCanvas();
    preloadImages();

    dialogueBox.setSize();

    ctxSettings({ fillStyle: "white", font: "40px Sketchy", textAlign: "center" });
    ctx.fillText("Click to start", canvas.width / 2, canvas.height / 2);
    window.requestAnimationFrame(introLoop);
}



//==================================================
// Start menu
//==================================================
function introLoop() {
    if (mouse.click) {
        dialogueBox.startDialogue([
            { character: "", text: "(You wake up on a cold stone floor)" },
            { character: "You", text: "'Woah!'" },
            { character: "You", text: "'Where am I?'" },
            { character: "You", text: "'This is not my bedroom...'" },
            { character: "You", text: "'THIS IS A PRISON CELL!'" },
            { character: "You", text: "'I gotta get out of here!'" },
        ])

        dialogueBox.onFinish = () => {
            gameScene = "PrisonCell";
        }

        window.requestAnimationFrame(gameLoop);
    } else {
        window.requestAnimationFrame(introLoop);
    }

}



//==================================================
// GameLoop
//==================================================
function gameLoop() {
    clearCanvas();
    document.body.style.cursor = "default";

    buttons = [];

    switch (gameScene) {
        case "Intro":
            break;

        case "PrisonCell":
            //==================================================
            // Creates prisonCellDoor and prisonCellBox
            //==================================================
            ctx.drawImage(images.bg, (((canvas.height / 0.5625) - canvas.width) / 2) * -1, 0, canvas.height / 0.5625, canvas.height);
            if (prisonCell.Door) {
                prisonCellDoor = new DoorButton((canvas.width - (750 / 1.75)) * 0.43, (canvas.height - (716 / 1.75)) * 0.29, 750 / 1.75, 716 / 1.75);
            } else {
                prisonCellDoor = new DoorButton((canvas.width - (750 / 1.75)) * 0.43, (canvas.height - (716 / 1.75)) * 0.29, 396 / 1.75, 716 / 1.75);
            }
            prisonCellBox = new BoxButton(canvas.width * 0.55, canvas.height * 0.46, 750 / 2.5, 458 / 2.5);
            buttons = [prisonCellDoor, prisonCellBox];

            //==================================================
            // prisonCellDoor
            //==================================================
            prisonCellDoor.onClick = () => {

                // If door is open when clicked, go to next scene
                if (prisonCell.Door) {
                    gameScene = "testEnemy";
                }

                // If player hasn't opened box, the door remains locked
                else if (!heldItem) {
                    dialogueBox.startDialogue([
                        { character: "", text: "(You pull the door handle)" },
                        { character: "", text: "(The door is locked)" },
                    ]);
                }

                // If player has opened box, the door is opened
                else if (heldItem == "Crowbar") {
                    changeState('door')

                    dialogueBox.startDialogue([
                        { character: "", text: "(You manage to break open the door)" },
                        { character: "You", text: "'Yes!'" },
                        { character: "You", text: "'I knew the crowbar would help me, now I can get out of here.'" },
                    ]);
                }
                mouse.click = false;
            };



            //==================================================
            // prisonCellBox
            //==================================================
            prisonCellBox.onClick = () => {

                // Box can only be opened once
                if (!heldItem) {
                    changeState('box')

                    dialogueBox.startDialogue([
                        { character: "", text: "(You open the box)" },
                        { character: "", text: "(There is a crowbar inside)" },
                    ]);

                    // Give player 'Crowbar', allowing them to open the door
                    heldItem = "Crowbar";
                }
            };
            break;

        //==================================================
        // Charisma
        //==================================================
        case "Test Encounter":
            if(count.enemy == 2) {
                dialogueBox.startDialogue([
                    { character: "You", text: "'Hey, you! I need your help to get out!'" },
                    { character: "Encounter1", text: "'How did you escape your cell? Oh whatever. Look, let me think...'" },
                    { character: "Encounter1", text: "'You know what?'" },
                    { character: "Encounter1", text: "'Let me see if I like your style, and maybe I'll let you through.'" },
                ]);
            }
            if(count.enemy == 3) {
                dialogueBox.startDialogue([
                    { character: "You", text: "'Hey I'm innocent! You must help me to escape!'" },
                    { character: "Encounter2", text: "'Who are you? Let me think...'" },
                    { character: "Encounter2", text: "'Okay, but I'm going to ask you some questions first.'" },
                ]);
            }
            if(count.enemy == 4) {
                dialogueBox.startDialogue([
                    { character: "You", text: "'Hey, could you help me escape? I swear I'm not supposed to be here!'" },
                    { character: "Encounter3", text: "'I'm not supposed to do this.. But I'm feeling generous today.'" },
                    { character: "Encounter3", text: "'Let me ask you some questions first though.'" },
                ]);
            }
            if(count.enemy == 5) {
                dialogueBox.startDialogue([
                    { character: "You", text: "'I should have what it takes to fool the guard at the entrance.'" },
                    { character: "You", text: "'Let me take on the prison guard clothes I got from my previous encounters.'" },
                    { character: "", text: "'You put on all three pieces of clothing you've gathered so far.'" },
                    { character: "You", text: "'This should do the trick.'" },
                    { character: "You", text: "'Hello sir. Sorry I am late.'" },
                    { character: "Boss", text: "'Oh, who are you?'" },
                ]);
            }
            //==================================================
            // Creates the enemy
            //==================================================
            dialogueBox.onFinish = () => {
                if(count.enemy == 2) {
                    enemy = new Enemy(10, images.encounter1, (canvas.width - canvas.height / 3 * 2) / 2, 0, canvas.height / 3 * 2, canvas.height / 3 * 2);
                    enemy.dialogueOptions = new encounter1('Encounter1');
                }
                if(count.enemy == 3) {
                    enemy = new Enemy(10, images.encounter2, (canvas.width - canvas.height / 3 * 2) / 2, 0, canvas.height / 3 * 2, canvas.height / 3 * 2);
                    enemy.dialogueOptions = new encounter1('Encounter2');
                }
                if(count.enemy == 4) {
                    enemy = new Enemy(10, images.encounter3, (canvas.width - canvas.height / 3 * 2) / 2, 0, canvas.height / 3 * 2, canvas.height / 3 * 2);
                    enemy.dialogueOptions = new encounter1('Encounter3');
                }
                if(count.enemy == 5) {
                    enemy = new Enemy(10, images.boss, (canvas.width - canvas.height / 3 * 2) / 2, 0, canvas.height / 3 * 2, canvas.height / 3 * 2);
                    enemy.dialogueOptions = new encounter1('Boss');
                }
                gameScene = "encounter";
            }
            break;
            
        case "encounter":            
            if (!currentSituation) {
                if(count.enemy < 5) {
                    currentSituation = enemy.dialogueOptions.randomSituation();
                } else {
                    currentSituation = enemy.dialogueOptions.situations[bossBattle]
                }
                enemy.dialogueCount++;
    
                //==================================================
                // If charm is maxed, go to next stage.
                //==================================================
                if (enemy.charmPoints >= enemy.requiredPoints) {
                    if(count.enemy == 1) {
                        gameScene = "next";
                    }
                    if(count.enemy == 2) {
                        dialogueBox.startDialogue([
                            { character: "Encounter1", text: "'You know what, fine. I like your style.'" },
                            { character: "Encounter1", text: "'You may go ahead, I wont stop you.'" },
                            { character: "Encounter1", text: "'Here I got these prison guard pants you could have. Maybe it will be useful to you.'" },
                            { character: "Encounter1", text: "'I also heard that the guard standing at the entrance is scheduled to take a lunch break soon.'" },
                            { character: "You", text: "'Okay, I will keep that in mind. Thank you!'" },
                        ]);
                    }
                    if(count.enemy == 3) {
                        dialogueBox.startDialogue([
                            { character: "Encounter2", text: "'You seem like a decent human. I like you.'" },
                            { character: "Encounter2", text: "'If you go forward from here, you will be on your way to freedom.'" },
                            { character: "Encounter2", text: "'I got these prison guard boots. I don't have any use for them. So you can have them.'" },
                            { character: "Encounter2", text: "'My friend who is a human was not here today... I wonder what happened to them. Their name is 'Kit'.'" },
                            { character: "You", text: "'That may be useful information. I will keep that in mind. Thanks!'" },
                        ]);
                    }
                    if(count.enemy == 4) {
                        dialogueBox.startDialogue([
                            { character: "Encounter3", text: "'Yeah you couldn't possibly belong here!'" },
                            { character: "Encounter3", text: "'The prison entrance is really close. I wish you good luck.'" },
                            { character: "Encounter3", text: "'But it's not going to be as easy as just walking out. There is a guard standing there.'" },
                            { character: "Encounter3", text: "'Here, I got this new prison tunic you could have. Maybe you could fool them. Who knows.'" },
                            { character: "Encounter3", text: "'Oh and if they ask you what the password is, it is 'Golden garden'.'" },
                            { character: "You", text: "'Thank you! This will definitely come in handy.'" },
                        ]);
                    }
                    if(count.enemy == 5) {
                        dialogueBox.startDialogue([
                            { character: "Boss", text: "'Alright, I got it. I'll be on my way then. Good luck.'" },
                            { character: "", text: "'The prison guard leaves the entrance'" },
                            { character: "You", text: "'I did it! I am free!'" },
                            { character: "", text: "'As soon as you make sure no one is watching. You open the door and leave.'" },
                        ]);
                    }
                    dialogueBox.onFinish = () => {
                        count.charisma++;
                        gameScene = "next";
                    }
                }
                //==================================================
                // If charm is not maxed out before the 5th question, go to battle.
                //==================================================
                else if (enemy.dialogueCount > 5) {
                    gameScene = "testEnemy";
                }
                //==================================================
                // Goes to next question
                //==================================================
                else {
                    enemy.dialogueOptions.bossBattle++
                    dialogueBox.startDialogue(currentSituation.dialogue);
                    dialogueBox.onFinish = () => {
                        showDialogueOptions = true;
                    }
                }
            }
    
            ctx.drawImage(images.emptyBg, (((canvas.height / 0.5625) - canvas.width) / 2) * -1, 0, canvas.height / 0.5625, canvas.height);
            enemy.draw();

            ctxSettings({ font: "32px Sketchy", textAlign: "left", fillStyle: "rgb(220,220,220)" });
            if(enemy.dialogueCount >= 5) {
                ctx.fillText("5/5 questions", canvas.width * 0.15, canvas.height * 0.15);
            } else {
                ctx.fillText(enemy.dialogueCount + "/5 questions", canvas.width * 0.15, canvas.height * 0.15);
            }
            ctxSettings({ textAlign: "right" });
            ctx.fillText("Charm: " + enemy.charmPoints + "/" + enemy.requiredPoints, canvas.width * 0.85, canvas.height * 0.15);

            if (showDialogueOptions) {
                let m = canvas.width / 2;
                let y = canvas.height * 0.6;
                let buttonW = 400; // + followed + not ratio
                let spaceBetween = 32;
                let option1 = new DialogueButton(m - buttonW / 2 - buttonW - spaceBetween, y, buttonW, 240);
                let option2 = new DialogueButton(m - buttonW / 2, y, buttonW, 240);
                let option3 = new DialogueButton(m + buttonW / 2 + spaceBetween, y, buttonW, 240);

                buttons = [option1, option2, option3];

                // Open dice window
                if(!diceRoll) {
                    option1.onClick = () => {
                        diceRoll = new DiceRoll(6, 0, 4);
                        option = currentSituation.options[0];
                    }

                    option2.onClick = () => {
                        diceRoll = new DiceRoll(6, 0, 4);
                        option = currentSituation.options[1];
                    }

                    option3.onClick = () => {
                        diceRoll = new DiceRoll(6, 0, 4);
                        option = currentSituation.options[2];
                    }
                }
                

                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].setOption(currentSituation.options[i]);
                }


                // Close dice window
                if (diceRoll && diceRoll.doneRolling && mouse.click) {
                    if (diceRoll.finalResult >= option.minimumSum) {
                        enemy.charmPoints += option.successPoints;
                        dialogueBox.startDialogue(option.positiveResponse);
                    } else {
                        dialogueBox.startDialogue(option.negativeResponse);
                    }
                    //==================================================
                    // Removes the last question so the new question can pop up
                    //==================================================
                    resetCharisma();
                    dialogueBox.onFinish = () => {
                        currentSituation = null;
                    }
                    mouse.click = false;
                }
            }

            break;

        //==================================================
        // Combat
        //==================================================
        case "testEnemy":
            //==================================================
            // Conversation before battle
            //==================================================
            if(count.enemy == 1) {
                enemyImg = images.guard
                dialogueBox.startDialogue([
                    { character: "Guard", text: "'Hey you, stop right there!'" },
                ]);
            }
            else if(count.enemy == 2) {
                enemyImg = images.encounter1
                dialogueBox.startDialogue([
                    { character: "Encounter1", text: "'I'll be honest, I do not like you.'" },
                    { character: "Encounter1", text: "'Not one bit.'" },
                    { character: "Encounter1", text: "'I should send you back to your cell.'" },
                    { character: "Encounter1", text: "'Even if I have to use force, I will.'" },
                    { character: "You", text: "'I can't let it end here!'" },
                ]);
            }
            else if(count.enemy == 3) {
                enemyImg = images.encounter2
                dialogueBox.startDialogue([
                    { character: "Encounter2", text: "'You do not seem like someone I'd trust.'" },
                    { character: "Encounter2", text: "'I have to send you back.'" },
                    { character: "Encounter2", text: "'Do not resist!'" },
                    { character: "You", text: "'I'm sorry, but I have to get out of here, no matter what!'" },
                ]);
            }
            else if(count.enemy == 4) {
                enemyImg = images.encounter3
                dialogueBox.startDialogue([
                    { character: "Encounter3", text: "'I've had enough.'" },
                    { character: "Encounter3", text: "'This is a waste of my time.'" },
                    { character: "Encounter3", text: "'I am perfectly capable of ending you right here, right now.'" },
                    { character: "You", text: "'Crap... I am so close!'" },
                    { character: "You", text: "'I just need to take care of this guard.'" },
                ]);
            }
            else if(count.enemy == 5 && count.charisma == 3) {
                enemyImg = images.boss
                dialogueBox.startDialogue([
                    { character: "You", text: "'I wonder if I can talk my way through this one. He seems tough.'" },
                    { character: "", text: "'You walk up to the guard standing at the door'" },
                    { character: "You", text: "'Hey you! Please help me, I need to get out of here! I am innocent!'" },
                    { character: "Boss", text: "'How did you get here, inmate!?'" },
                    { character: "Boss", text: "'Get back to your cell now!'" },
                    { character: "Boss", text: "'Actually, if you got this far, you have probably beaten up guards to get here.'" },
                    { character: "Boss", text: "'Prepare yourself.'" },
                    { character: "Boss", text: "'You are not getting out of here alive!'" },
                    { character: "You", text: "'Uh oh.'" },
                ]);
                dialogueBox.onFinish = () => {
                    enemy = new Enemy(10, images.boss, (canvas.width - canvas.height / 3 * 2) / 2, 0, canvas.height / 3 * 2, canvas.height / 3 * 2);
                }
            }
            else if(count.enemy == 5) {
                enemyImg = images.boss
                dialogueBox.startDialogue([
                    { character: "Boss", text: "'That's not the right password...'" },
                    { character: "Boss", text: "'You're an escapee, aren't you?! Get over here and taste my wrath!'" },
                ]);
            }
            //==================================================
            // Prep battle
            //==================================================
            dialogueBox.onFinish = () => {
                enemy = new Enemy(10, enemyImg, (canvas.width - canvas.height / 3 * 2) / 2, 0, canvas.height / 3 * 2, canvas.height / 3 * 2);
                gameScene = "combatEncounter";
                reRollDice = [];
                turn = 1;
                reRolls = 3;
                reRoll(diceBag);
                enemyDmg = Math.floor(Math.random() * 6);
                enemyBlock = 6 - enemyDmg;
                console.log('Enemy dmg: '+enemyDmg);
                console.log('Enemy block: '+enemyBlock);
            }
            break;
                
        case "combatEncounter":
            let done = new CombatButton(canvas.width * 0, canvas.height * 0.7, canvas.width * 0.5, (canvas.width * 0.4) / 3, "Engage");
            let roll = new CombatButton(canvas.width * 0.5, canvas.height * 0.7, canvas.width * 0.5, (canvas.width * 0.4) / 3, "Reroll");

            let one = new DiceButton(canvas.width * 0.2, canvas.height * 0.5, canvas.width * 0.1, canvas.width * 0.1, 0);
            let two = new DiceButton(canvas.width * 0.3, canvas.height * 0.5, canvas.width * 0.1, canvas.width * 0.1, 1);
            let three = new DiceButton(canvas.width * 0.4, canvas.height * 0.5, canvas.width * 0.1, canvas.width * 0.1, 2);
            let four = new DiceButton(canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.1, canvas.width * 0.1, 3);
            let five = new DiceButton(canvas.width * 0.6, canvas.height * 0.5, canvas.width * 0.1, canvas.width * 0.1, 4);
            let six = new DiceButton(canvas.width * 0.7, canvas.height * 0.5, canvas.width * 0.1, canvas.width * 0.1, 5);
            let diceButtons = [];
            diceButtons = [one, two, three, four, five, six];
            buttons = [one, two, three, four, five, six, done, roll];

            dialogueBox.onFinish = () => {
                gameScene = "combatEncounter";
            }



            if (player.alive == false) {
                dialogueBox.startDialogue([
                    { character: "", text: "(You died)" },
                ]);
                dialogueBox.onFinish = () => {
                    window.location.reload();
                }
            }
            else if (enemy.alive == false) {
                dialogueBox.startDialogue([
                    { character: "", text: "(They died)" },
                ]);
                dialogueBox.onFinish = () => {
                    gameScene = "next";
                }
            }
            for (let i = 0; i < diceButtons.length; i++) {
                diceButtons[i].onClick = () => {
                    if (diceButtons[i].clicked) {
                        diceButtons[i].clicked = false;
                        for (x = reRollDice.length; x >= 0; --x) {
                            if (reRollDice[x] == diceButtons[i]) {
                                reRollDice[i].splice(i, 1);
                            }
                        }
                    }
                    else {
                        diceButtons[i].clicked = true;
                        reRollDice.push(diceBag[diceButtons[i].diceBagSpot]);
                    }
                    mouse.click = false;
                }
            }

            roll.onClick = () => {
                if (reRolls > 0) {
                    let temp = [];
                    for (let i = reRollDice.length - 1; i >= 0; i--) {

                        temp.push(reRollDice[i]);
                        reRollDice[i].clicked = false;
                    }

                    reRoll(temp);
                    reRolls--;
                    reRollDice = [];
                }

                mouse.click = false;

            }

            done.onClick = () => {
                let dmg = 0;
                let def = 0;
                let heal = 0;
                let neg = 0;
                diceBag.forEach(i => {
                    if (i.die[i.sideUp] == "atc") {
                        dmg++;
                    }
                    if (i.die[i.sideUp] == "def") {
                        def++;
                    }
                    if (i.die[i.sideUp] == "heal") {
                        heal++;
                    }
                    if (i.die[i.sideUp] == "neg") {
                        neg++;
                    }
                });
                dialogueBox.onFinish = () => {
                    gameScene = "";
                }
                anwser = [];
                if (dmg > 0) {
                    dmgDone = enemy.takeDmg(dmg - enemyBlock);
                    anwser.push({ character: "", text: "(You deal " + dmgDone + " damage)" });

                }
                if (heal > 0) {
                    healDone = player.heal(heal);
                    anwser.push({ character: "", text: "(You heal for " + healDone + ")" });
                }
                if (def > 0) {
                    dmgDone = player.takeDmg(enemyDmg - def);
                    anwser.push({ character: "", text: "(You take " + dmgDone + ")" });
                }
                if (neg > 0) {
                    dmgDone = player.takeDmg(neg);
                    anwser.push({ character: "", text: "(You take " + dmgDone + " from recoil)" });
                }
                dialogueBox.startDialogue(anwser);
                console.log(player.alive);
                turn = 0;
                mouse.click = false;
            };

            if (turn == 0) {
                turn = 1;
                reRolls = 3;
                reRoll(diceBag);
                enemyDmg = Math.floor(Math.random() * 6);
                enemyBlock = 6 - enemyDmg - Math.floor(Math.random() * 3);
            }

            enemy.draw();

            ctx.fillText(enemy.hp + "/" + enemy.maxHp, canvas.width * 0.05, canvas.height * 0.05);
            ctx.fillText("Enemy Attack: " + enemyDmg + " Enemy Block: " + enemyBlock, canvas.width * 0.1, canvas.height * 0.05);
            ctx.fillText(player.hp + "/" + player.maxHp, canvas.width * 0.92, canvas.height * 0.64);
            ctx.fillText("Rerolls Left: " + reRolls, canvas.width * 0.8, canvas.height * 0.64);

            break;

        //==================================================
        // Next enemy
        //==================================================
        case "next":
            resetCharisma();
            currentSituation = null;

            count.enemy++;
            if(count.enemy == 5 && count.charisma != 3) {
                gameScene = "testEnemy";
            }
            else if(count.enemy <= 5) {
                gameScene = "Test Encounter";
            }
            else {
                alert("You won!!!");
            }
            console.log('next character is '+count.enemy)
            break;
    }

    // Update and draw all buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].update();
        buttons[i].draw();
    }

    draw();

    window.requestAnimationFrame(gameLoop);
}



//==================================================
// Reset charisma
//==================================================
function resetCharisma() {
    diceRoll = null;
    option = null;
    showDialogueOptions = false;
};



//==================================================
// Opens door and box in prisonCell
//==================================================
function changeState(type) {
    if (type == 'door') {
        prisonCell.Door = true;
    }
    if (type == 'box') {
        prisonCell.Box = true;
    }
};