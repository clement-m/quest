class ClassAction {
	constructor() {

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



    attack() {

    }

    die() {

    }
}

class ClassPattern {
	constructor() {

    }

    walkOnly() {

    }

    stay() {

    }

    attack() {

    }

    die() {

    }
}