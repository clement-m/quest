window.onload = function()
{
    var started = false;

    function getRandom(max) {
        return Math.floor(Math.random() * max + 1);
    }

    //function includeJs() {
    //    document.write('<script type="text/javascript" src="src/js/canvasInit.js"></script>');
    //}

    var effect = new Audio('src/sound/effects/japan.mp4');


    // INIT CANVAS
    var canvas = document.getElementById("canvas");
    if(!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }
    var canvasJquery = $('#canvas');

    var context = canvas.getContext("2d");
    if(!context) {
        alert("Impossible de récupérer le context");
        return;
    }

    var Game = new ClassGame();

    // INIT UNITS
    var Player = new ClassPlayer(getRandom(1000000), canvas.height, 0, true, Game.Images, Game.Audios);
    Game.addUnit(Player);

    aSkeleton = new ClassSkeleton(getRandom(1000000), canvas.height, 1600, false, Game.Images, Game.Audios);
    Game.addUnit(aSkeleton);

    //aSkeleton = new ClassSkeleton(getRandom(1000000), canvas.height, 400, -4, Game.Images);
    //Game.addUnit(aSkeleton);

    //aSkeleton = new ClassSkeleton(getRandom(1000000), canvas.height, 950, -4, Game.Images);
    //Game.addUnit(aSkeleton);

    // INIT KEYS LISTENER
    window.addEventListener("keydown", onKeyDown, false);
    window.addEventListener("keyup", onKeyUp, false);
    function onKeyDown(event) {
        switch (event.key) {
            case "z": //d
                Player.speedY--;
                break;
            case "q": //s
                Player.speedX--;
                break;
            case "s": //a
                Player.speedY++;
                break;
            case "d": //w
                Player.speedX++;
                break;
            case " ":
                if(!Player.attacking) {
                    Player.attack(Game.Units);
                }
            case "Enter":
                    started = true;
                    Game.Audios.musics['castlevania'].play();
                break;
        }
    }

    function onKeyUp(event) {
        switch (event.key) {
            case "z": //d
                Player.speedY = 0;
                break;
            case "q": //s
                Player.speedX = 0;
                break;
            case "s": //a
                Player.speedY = 0;
                break;
            case "d": //w
                Player.speedX = 0;
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
    
}