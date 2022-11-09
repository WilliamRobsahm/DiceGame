

export function resizeCanvas() {
    canvas.setAttribute("height",Math.round(window.innerHeight));
    canvas.setAttribute("width",Math.round(window.innerWidth));
}