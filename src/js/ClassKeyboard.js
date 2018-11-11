class ClassKeyboard {
	constructor(Player) {
		this.Player = Player;
	}

	onKeyDown(event) {
        var key = event.key;
        switch (key) {
            case "z": //d
                this.Player.speedY--;
                console.log(this.Player.speedY);
                break;
            case "q": //s
                this.Player.speedX--;
                
                console.log(this.Player.speedX);
                break;
            case "s": //a
                this.Player.speedY++;
                console.log(this.Player.speedY);
                break;
            case "d": //w
                this.Player.speedX++;
                console.log(this.Player.speedX);
                break;
        }
    }
/*
    onKeyUp(event) {
        var key = event.key;
        switch (key) {
            case "z": //d
                keyD = false;
                break;
            case "q": //s
                keyS = false;
                break;
            case "s": //a
                keyA = false;
                break;
            case "d": //w
                keyW = false;
                break;
        }
    }
*/
}