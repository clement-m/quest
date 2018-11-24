class ClassKeyboard {
	constructor() {

	}

    setPlayer() {
        window.addEventListener("keydown", this.onKeyDown);
        window.addEventListener("keyup", this.onKeyUp);
    }

    onKeyDown(event) {
    switch (event.key) {
            case "z":
            case "Z":
                Game.Player.goTop();
                break;
            case "q":
            case "Q":
                Game.Player.goLeft();
                break;
            case "s":
            case "S":
                Game.Player.goBottom();
                break;
            case "d":
            case "D":
                Game.Player.goRight();
                break;
            case " ":
                Game.Player.attack(Game.Units);
                break;
            case "Enter":
                Game.start();
                Game.Audios.playMusic();
                break;
        }
    }

    onKeyUp(event) {
    switch (event.key) {
            case "z":
            case "Z":
                Game.Player.stopMove();
                break;
            case "q":
            case "Q":
                Game.Player.stopMove();
                break;
            case "s":
            case "S":
                Game.Player.stopMove();
                break;
            case "d":
            case "D":
                Game.Player.stopMove();
                break;
        }
    }
}