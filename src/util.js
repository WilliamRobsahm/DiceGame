
/**
 * Set canvas size to current window size
 */
function resizeCanvas() {
    canvas.setAttribute("height",Math.round(window.innerHeight));
    canvas.setAttribute("width",Math.round(window.innerWidth)); no();
}

/**
 * Return a random number between the two points
 * @param {int}     min     Minimum value
 * @param {int}     max     Maximum value
 * @returns {int}
 */
function rng(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Takes a number. Forces the number to be within the given range, then returns it.
 * @param {int}     num     The number
 * @param {int}     min     Minimum value
 * @param {int}     max     Maximum value
 * @returns {int}
 */
function clamp(num,min,max) {
    return Math.min(Math.max(num, min), max);
}

/**
 * Return true if mouse is currently on top of object.
 * Used for clickable things, like buttons.
 * 
 * @param {object}  object  The object (requires x, y, w, and h properties)
 * @returns {boolean}
 */
function mouseOn(object) {
    return (
        mouse.x >= object.x && 
        mouse.x <= object.x + object.w &&
        mouse.y >= object.y &&
        mouse.y <= object.y + object.h
    );
}

/**
 * Set multiple ctx attributes at once to make code a little bit more compact
 * 
 * @param {object}  attributes  Object with ctx attributes and their values, ex. {fillStyle:"white"};
 */
function ctxSettings(attributes) {
    for(let a in attributes) {
        ctx[a] = attributes[a];
    }
}