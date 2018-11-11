class ClassUnits {
	constructor() {
		this.arrayUnits = [];
	}

	addUnit(Unit) {
		this.arrayUnits.push(Unit);
	}
	
	display(context, canvasWidth, canvasHeight) {
		var arrayUnitsTemp = [];
		this.arrayUnits.forEach(function(Unit) {
			if(Unit.attacking === undefined) {
				Unit.updatePosition();
			} else {
				if(Unit.attacking) {
					Unit.attack();
				} else {
					Unit.updatePosition();
				}
			}
			
			Unit.display(context);

			if(Unit.colisionCanvas !== undefined) {
				Unit.colisionCanvas(canvasWidth, canvasHeight);
			}
			
			arrayUnitsTemp.push(Unit);
		});

		this.arrayUnits.forEach(function(Unit) {
			arrayUnitsTemp.forEach(function(Ennemy) {
				if(!Unit.dead && !Ennemy.dead && Unit.id !== Ennemy.id) {
					Unit.colidBall(Ennemy);
				}
			});
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