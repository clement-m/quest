class ClassPattern {
	constructor(patternName, directionRight) {
        this.masterPattern = patternName;
        this.currentPattern = patternName;
    }

    player() {
        this.currentPattern = "player";
    }

    setWalk() {
        this.currentPattern = "walker";
        Game.Tics.setTic(this.currentPattern);
    }

    setAttack() {
        this.currentPattern = "attack";
        Game.Tics.setTic(this.currentPattern);
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
                if(Game.Tics.tic[this.currentPattern] === undefined) {
                    this.setWalk();
                }
                if(Game.Tics.next(this.currentPattern)) {
                    this.resetMasterPattern(Unit);
                } else {
                    Game.Animation.walk(Unit, this.currentPattern);
                }
                break;
            case "attack":
                if(Game.Tics.next(this.currentPattern)) {
                    this.resetMasterPattern(Unit);
                } else {
                    Game.Animation.attack(Unit, this.currentPattern);
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