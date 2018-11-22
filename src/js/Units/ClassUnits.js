class ClassUnits {
	constructor() {
		this.arrayUnits = [];
	}

	addUnit(Unit) {
		this.arrayUnits.push(Unit);
	}
	
	display(context, canvasWidth, canvasHeight) {
		this.arrayUnits.forEach(function(Unit) {
			Unit.updatePosition();
			Unit.display(context);
		}, this);
	}

	die() {
		this.arrayUnits.forEach(function(Unit, index, arrayUnits) {
			if(Unit.Malus.isDead) {
				arrayUnits.splice(index, 1);
			}
		});
	}
}