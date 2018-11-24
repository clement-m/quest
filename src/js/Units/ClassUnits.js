class ClassUnits {
	constructor() {
		this.arrayUnits = [];
	}

	addUnit(Unit) {
		this.arrayUnits.push(Unit);
	}
	
	display(canvasWidth, canvasHeight) {
		this.arrayUnits.forEach(function(Unit) {
			Unit.updatePosition();
			Unit.action();
			Unit.display();
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