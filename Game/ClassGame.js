class ClassGame {
	constructor(document, window) {
		// GAME SETTING
		this.MUSIC_ON = false;
		this.SOUND_EFFECT_ON = false;
		// DEVELOPPEMENT SETTING
		this.SHOW_COLISION_ON = true;
		// ATTR
		this.started = true;
		this.Player;
		this.canvas = this.getCanvas(document);
		this.context = this.getContext(this.canvas);
		this.canvasHeight = this.canvas.height;
		this.canvasWidth = this.canvas.width;
		this.Keyboard = new ClassKeyboard();
		this.Audios = new ClassGameAudios(this.MUSIC_ON);
		this.Images = new ClassGameImages();
		this.Animation = new ClassAnimation();
		this.Units =  new ClassUnits();
		this.Colision = new ClassColision(this.SHOW_COLISION_ON);
		this.Tics = new ClassTic();
		this.init();
	}

	run() {
	    if(this.started) {
	        this.next();    
	    }
	}

	start() {
		this.started = true;
	}

	addUnit(Unit) {
		this.Units.addUnit(Unit);
	}

	next() {
		this.Units.die();
		this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
		this.Units.display(this.canvasWidth, this.canvasHeight);
	}

	init() {
		this.Player = new ClassPlayer(
			this.getRandom(1000000), 
			true, 
			this.canvasHeight, 
			0, 
			true, 
			"player", 
			this.Images, 
			this.Audios
		);
		
		this.addUnit(new ClassSkeleton(
			this.getRandom(1000000), 
			false,  
			this.canvasHeight, 
			1600, 
			false, 
			"walker", 
			this.Images, 
			this.Audios
		));

		//aSkeleton = new ClassSkeleton(getRandom(1000000), canvas.height, 400, -4, Game.Images);
		//this.addUnit(aSkeleton);

		//aSkeleton = new ClassSkeleton(getRandom(1000000), canvas.height, 950, -4, Game.Images);
		//this.addUnit(aSkeleton);

		this.Keyboard.setPlayer(this.Player);
		this.addUnit(this.Player);
	}

	getRandom(max) {
	    return Math.floor(Math.random() * max + 1);
	}

	getCanvas(document) {
		let canvas = document.getElementById("canvas");
		if(!canvas) {
		    alert("Impossible de récupérer le canvas");
		}
		return canvas;
	}

	getContext(canvas) {
		let context = canvas.getContext("2d");
		if(!context) {
		    alert("Impossible de récupérer le context");
		}
		return context;
	}
}