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
}

class ClassUnitPosition {
    constructor(posX, canvasHeight) {
        this.posX = posX;
        this.posY = canvasHeight - this.height;
        this.posXMargin = 15;
        this.posYMargin = 15;
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

    changeDirection(Unit) {
    	if(Unit.speedX != 0) {
            if(Unit.speedX > 0) {
                Unit.directionRight = true;
            } else {
                Unit.directionRight = false;
            }
        }
    }

    stay(Unit) {
    	if(Unit.directionRight) {
            Unit.currentImg = Unit.img;
        } else {
            Unit.currentImg = Unit.imgL;
        }
    }

    walk(Unit) {
        this.changeDirection(Unit);
        if(this.speedX != 0 || this.speedY != 0) {
            this.walking++;
            if(this.walking + 1 > this.walkingMaxCount) {
                this.walking = 0;
                if(this.directionRight) {
                    if(this.currentImg === this.img) {
                        this.currentImg = this.imgWalk;
                    } else {
                        this.currentImg = this.img;
                    }
                } else {
                    if(this.currentImg === this.imgL) {
                        this.currentImg = this.imgWalkL;
                    } else {
                        this.currentImg = this.imgL;
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
        this.isBuff = true;
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
        this.currentPattern = "";


        switch(patternName) {
            case "player":
                break;

            case "moveOnly":
                
                walkOnly();
                break;
        }
    }

    currentPattern() {
        
    }

    walkOnly(directionRight, ) {
        this.currentPattern = walk();
    }

    stay() {

    }

    attack() {

    }

    die() {

    }
}