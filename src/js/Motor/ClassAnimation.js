class ClassUnitAnimation {
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

    attack(Unit, Tics, currentPattern) {
        if(Tics.tic[currentPattern] <= Tics.tic[currentPattern + "Duration"] / 2) {
            if(Unit.directionRight) {
                Unit.currentImg = Unit.imgAttack;
            } else {
                Unit.currentImg = Unit.imgAttackL;
            }
        } else {
            if(Unit.directionRight) {
                Unit.currentImg = Unit.imgAttack2;
            } else {
                Unit.currentImg = Unit.imgAttack2L;
            }
        }
    }

    die(Unit) {

    }
}