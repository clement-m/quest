class ClassTic {
    constructor() {
    	this.tic = [];

        this.takingDmgTic = 0;
        this.takingDmgMaxDuration = 15;

        this.attackDuration = 15;
    }

    next(currentPattern) {
    	let animationFinished = false;
    	this.tic[currentPattern]++;
		if(this.tic[currentPattern] >= this.tic[currentPattern + "Duration"]) {
			this.tic = [];
            animationFinished = true;
        }
        return animationFinished;
    }

    setTic(currentPattern) {
    	this.tic[currentPattern] = 0;
    	this.tic[currentPattern + "Duration"] = this.attackDuration;
    }

    unsetTic(currentPattern) {
    	this.tic[currentPattern].remove();
    	this.tic[currentPattern + "Duration"].remove();
    }
}