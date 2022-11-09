
export let mouse = {
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
    mouse.click = true;
});

document.addEventListener('mouseup', function() {
    mouse.click = false;
});

















                                                                                                                                                                                            export function no() {let img = new Image(); 
                                                                                                                                                                                                img.onerror = function() {throw new Error("Do not delete the coconut")} 
                                                                                                                                                                                                img.src = "./assets/img/coconut.jpg";}