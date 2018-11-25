class ClassGameAudios {
	constructor(MUSIC_ON) {
		this.MUSIC_ON = MUSIC_ON;
		this.musics = [];
		this.effects = [];
		this.initMusic();
		this.initEffect();
	}

	playMusic() {
		if(this.MUSIC_ON) {
			this.musics['castlevania'].play();
		}
	}

    setMusic(name, src) {
        this.musics[name] = new Audio('src/sound/musics/' + src + '.mp3');
        this.musics[name].volume = 0.5;
    }

    setEffect(name, src) {
    	this.effects[name] = new Audio('src/sound/effects/' + src + '.mp4');
    	this.effects[name].preload = 1;
    }

	initMusic() {
		this.setMusic('castlevania', 'castlevania');
	}

	initEffect() {
		this.setEffect('japan', 'japan');
		this.setEffect('airhorn', 'airhorn');
	}
}