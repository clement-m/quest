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

class ClassAction {
	constructor() {
        this.isAttacking = false;
        this.isWalking = false;
        this.currentAction = "";
        this.walking = 0;
        this.walkingMaxCount = 5;
    }

    stay(Unit) {
    	if(Unit.directionRight) {
            Unit.currentImg = Unit.img;
        } else {
            Unit.currentImg = Unit.imgL;
        }
    }

    walk(Unit) {
        if(Unit.Stats.speedX !== 0 || Unit.Stats.speedY !== 0) {
            this.walking++;
            if(this.walking + 1 > this.walkingMaxCount) {
                this.walking = 0;
                if(Unit.directionRight) {
                    if(Unit.currentImg === Unit.img) {
                        Unit.currentImg = Unit.imgWalk;
                    } else {
                        Unit.currentImg = Unit.img;
                    }
                } else {
                    if(Unit.currentImg === Unit.imgL) {
                        Unit.currentImg = Unit.imgWalkL;
                    } else {
                        Unit.currentImg = Unit.imgL;
                    }
                }
                
            }
        } else {
            this.stay(Unit);
        }
    }



    attack(Unit) {

    }

    die(Unit) {

    }
}