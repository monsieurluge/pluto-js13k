/**
 * Scene object
 * @param {Canvas} canvas
 */
function Scene(canvas, background) {
    this.__background = background;
    this.__canvas     = canvas;
}

/**
 * Draws the given buffer into the scene's canvas
 * @param {Canvas} buffer
 */
Scene.prototype.scaleBuffer = function(buffer) {
    // draw the background
    this.__background.draw(this.__canvas);

    // stretch the given buffer
    this.__canvas.context2d().drawImage(
        buffer.canvas(),
        0,
        0,
        this.__canvas.width(),
        this.__canvas.height()
    );
}
