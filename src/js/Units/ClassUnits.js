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
			
			if(Unit.attacking) {
				Unit.attack(this);
			}
			
			if(Unit.colisionCanvas !== undefined) {
				Unit.colisionCanvas(canvasWidth, canvasHeight);
			}
			Unit.display(context);
		}, this);
	}

	die() {
		this.arrayUnits.forEach(function(Unit, index, arrayUnits) {
			if(this.Malus.isDead) {
				arrayUnits.splice(index, 1);
			}
		});
	}
}