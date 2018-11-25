class ClassPosition {
    constructor(posX, canvasHeight, height) {
        this.posX = posX;
        this.posY = canvasHeight - height;
        this.posXMargin = 15;
        this.posYMargin = 15;
    }

    updatePosition(Stats) {
        this.posX += Stats.speedX;
        this.posY += Stats.speedY;
    }
}