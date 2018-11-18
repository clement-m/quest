class ClassGame {
	constructor(canvasHeight) {
		this.canvasHeight = canvasHeight;
		this.Audios = new ClassGameAudios();
		this.Images = new ClassGameImages();
		this.Units =  new ClassUnits();
	}

	addUnit(Unit) {
		this.Units.addUnit(Unit);
	}
}