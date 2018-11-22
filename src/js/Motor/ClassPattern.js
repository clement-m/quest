class ClassUnitStat {
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

class ClassUnitPosition {
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

class ClassTicCounter {
    constructor() {
        this.attackTic = 0;
        this.attackMaxDuration = 15;
        this.takingDmgTic = 0;
        this.takingDmgMaxDuration = 15;
    }
}

class ClassBonus {
    constructor() {
        this.isBuff = false;
    }
}



class ClassMalus {
    constructor() {
        this.isDebuff = false;
        this.isStunned = false;
        this.isRoot = false;
        this.isTakingDmg = false;
        this.isDead = false;
    }

    stun(Unit) {
        Unit.isStunned = true;
    }
}

class ClassPattern {
	constructor(patternName, directionRight) {
        this.currentPattern = patternName;
    }

    applyPattern(Unit) {
        switch (this.currentPattern) {
            case "player":
                if(Unit.Stats.speedX !== 0) {
                    Unit.Action.walk(Unit);
                } else {
                    Unit.Action.stay(Unit);
                }
                break;
            case "walk":
                this.Action.walk(Unit);
                break;
        }
    }

    walkOnly(directionRight, ) {
        this.currentPattern = "walk";
    }

    stay() {

    }

    attack() {

    }

    die() {

    }
}