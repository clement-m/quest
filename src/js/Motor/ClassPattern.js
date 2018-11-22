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