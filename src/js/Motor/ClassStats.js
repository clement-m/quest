class ClassStats {
    constructor() {
        this.width = 75;
        this.height = 200;
        this.hp = 0;
        this.speedY = 0;
        this.speedX = 0;
        this.minSpeed = -8;
        this.maxSpeed = 8;
    }

    checkMaxSpeed() {
        if(this.speedX > this.maxSpeed) this.speedX = this.maxSpeed;
        if(this.speedY > this.maxSpeed) this.speedY = this.maxSpeed;
        if(this.speedX < this.minSpeed) this.speedX = this.minSpeed;
        if(this.speedY < this.minSpeed) this.speedY = this.minSpeed;
    }

    changeDirection(Unit) {
        if(Unit.Stats.speedX != 0) {
            if(Unit.Stats.speedX > 0) {
                Unit.directionRight = true;
            } else {
                Unit.directionRight = false;
            }
        }
    }

    stopMove() {
        this.speedX = 0;
        this.speedY = 0;
    }

    goRight(Unit) {
        this.speedX++;
        this.changeDirection(Unit);
    }

    goLeft(Unit) {
        this.speedX--;
        this.changeDirection(Unit);
    }

    goTop() {
        this.speedY--;
    }

    goBottom() {
        this.speedY++;
    }
}