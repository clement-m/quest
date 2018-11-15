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
				Unit.attack();
			}
			
			if(Unit.colisionCanvas !== undefined) {
				Unit.colisionCanvas(canvasWidth, canvasHeight);
			}
			Unit.display(context);
		});
	}

	die() {
		this.arrayUnits.forEach(function(item, index, object) {
			if(item.dead) {
				object.splice(index, 1);
			}
		});
	}
};