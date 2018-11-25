class ClassPattern {
	constructor(patternName, directionRight) {
        this.masterPattern = patternName;
        this.currentPattern = patternName;
        
        this.Tics = new ClassTic();
    }

    player() {
        this.currentPattern = "player";
    }

    setWalk() {
        this.currentPattern = "walker";
        this.Tics.setTic(this.currentPattern);
    }

    setAttack() {
        this.currentPattern = "attack";
        this.Tics.setTic(this.currentPattern);
    }

    applyPattern(Unit) {
        switch (this.currentPattern) {
            case "player":
                if(Unit.Stats.speedX !== 0) {
                    Game.Animation.walk(Unit);
                } else {
                    Game.Animation.stay(Unit);
                }
                break;
            case "walker":
                if(this.Tics.tic[this.currentPattern] === undefined) {
                    this.setWalk();
                }
                if(this.Tics.next(this.currentPattern)) {
                    this.resetMasterPattern(Unit);
                } else {
                    Game.Animation.walk(Unit, this.Tics, this.currentPattern);
                }
                break;
            case "attack":
                if(this.Tics.next(this.currentPattern)) {
                    this.resetMasterPattern(Unit);
                } else {
                    Game.Animation.attack(Unit, this.Tics, this.currentPattern);
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
                this.setWalk();
                this.currentPattern = "walker";
                break;
        }

        this.applyPattern(Unit);
    }
}