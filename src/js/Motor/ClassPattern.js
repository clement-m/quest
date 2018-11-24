class ClassPattern {
	constructor(patternName, directionRight) {
        this.masterPattern = patternName;
        this.currentPattern = patternName;
        
        this.Tics = new ClassTic();
    }

    player() {
        this.currentPattern = "player";
    }

    walker() {
        this.currentPattern = "walk";
    }

    setAttack() {
        this.currentPattern = "attack";
        this.Tics.setTic(this.currentPattern);
    }

    applyPattern(Unit) {
        switch (this.currentPattern) {
            case "player":
                if(Unit.Stats.speedX !== 0) {
                    Unit.Animation.walk(Unit);
                } else {
                    Unit.Animation.stay(Unit);
                }
                break;
            case "walker":
                Unit.Animation.walk(Unit);
                break;
            case "attack":
                if(this.Tics.next(this.currentPattern)) {
                    this.resetMasterPattern(Unit);
                } else {
                    Unit.Animation.attack(Unit, this.Tics, this.currentPattern);
                }
                break;
        }
    }

    resetMasterPattern(Unit) {
        switch (this.masterPattern) {
            case "player":
                this.currentPattern = "player";
                break;
            case "walker":
                this.currentPattern = "walk";
                break;
        }

        this.applyPattern(Unit);
    }
}