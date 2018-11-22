
var started = true;

function getRandom(max) {
    return Math.floor(Math.random() * max + 1);
}

var effect = new Audio('src/sound/effects/japan.mp4');


// INIT CANVAS
var canvas = document.getElementById("canvas");
if(!canvas) {
    alert("Impossible de récupérer le canvas");
}

var context = canvas.getContext("2d");
if(!context) {
    alert("Impossible de récupérer le context");
}


var Game = new ClassGame();

// INIT UNITS
var Player = new ClassPlayer(getRandom(1000000), true, canvas.height, 0, true, "moveOnly", Game.Images, Game.Audios);
Game.addUnit(Player);


//aSkeleton = new ClassSkeleton(getRandom(1000000), canvas.height, 1600, false, "player", Game.Images, Game.Audios);
//Game.addUnit(aSkeleton);

//aSkeleton = new ClassSkeleton(getRandom(1000000), canvas.height, 400, -4, Game.Images);
//Game.addUnit(aSkeleton);

//aSkeleton = new ClassSkeleton(getRandom(1000000), canvas.height, 950, -4, Game.Images);
//Game.addUnit(aSkeleton);

// INIT KEYS LISTENER
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);
function onKeyDown(event) {
    switch (event.key) {
        case "z":
        case "Z":
            Player.goTop();
            break;
        case "q":
        case "Q":
            Player.goLeft();
            break;
        case "s":
        case "S":
            Player.goBottom();
            break;
        case "d":
        case "D":
            Player.goRight();
            break;
        case " ":
            if(!Player.attacking) {
                Player.attack(Game.Units);
            }
        case "Enter":
                started = true;
                //Game.Audios.musics['castlevania'].play();
            break;
    }
}

function onKeyUp(event) {
    switch (event.key) {
        case "z":
        case "Z":
            Player.stopMove();
            break;
        case "q":
        case "Q":
            Player.stopMove();
            break;
        case "s":
        case "S":
            Player.stopMove();
            break;
        case "d":
        case "D":
            Player.stopMove();
            break;
    }
}

// INIT GAME

var myInterval = setInterval(animate, 1000 / 30);
function animate() {
    if(started) {
        Game.Units.die();
        context.clearRect(0, 0, canvas.width, canvas.height);
        Game.Units.display(context, canvas.width, canvas.height);    
    }
    
}