class ClassAnimation {
    constructor() {

    }

    stay(Unit) {
        if(Unit.directionRight) {
            Unit.currentImg = Unit.img;
        } else {
            Unit.currentImg = Unit.imgL;
        }
    }

    walk(Unit, Tics, currentPattern) {
        if(Tics.tic[currentPattern] + 1 > Tics.tic[currentPattern + "Duration"] / 2) {
            if(Unit.directionRight) {
                Unit.currentImg = Unit.img;
            } else {
                Unit.currentImg = Unit.imgL;
            }
        } else {
            if(Unit.directionRight) {
                Unit.currentImg = Unit.imgWalk;
            } else {
                Unit.currentImg = Unit.imgWalkL;
            }
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