class ClassGame {
	constructor(canvasHeight) {
		this.canvasHeight = canvasHeight;
		this.Units =  new ClassUnits();

		this.audio = new Audio("src/sound/music/castlevania.mp3");
	}

	addUnit(Unit) {
		this.Units.addUnit(Unit);
	}



}