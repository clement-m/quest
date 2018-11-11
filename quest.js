window.onload = function()
{
    // INIT CANVAS
    var canvas = document.getElementById("canvas");
    if(!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }
    
    var context = canvas.getContext("2d");
    if(!context) {
        alert("Impossible de récupérer le context");
        return;
    }    

    // INIT UNITS
    var Units =  new ClassUnits();
    var Skeleton = new ClassSkeleton(2, 1, canvas.height);
    //var Player = new ClassBall(1, 1, 120, 30, 65);


    // LOAD IN UNITS
    //Units.addUnit(new ClassBall());
    //Units.addUnit(Player);
    Units.addUnit(Skeleton);

    // Lauch music
    var audio = new Audio("src/sound/music/castlevania.mp3");



// INIT KEYS LISTENER
    window.addEventListener("keydown", onKeyDown, false);
    window.addEventListener("keyup", onKeyUp, false);
    function onKeyDown(event) {
        switch (event.key) {
            case "z": //d
                Skeleton.speedY--;
                break;
            case "q": //s
                Skeleton.speedX--;
                Skeleton.directionRight = false;
                break;
            case "s": //a
                Skeleton.speedY++;
                break;
            case "d": //w
                Skeleton.speedX++;
                Skeleton.directionRight = true;
                break;
            case " ":
                if(!Skeleton.attacking) {
                    Skeleton.attack();
                }
                break;
        }
        //audio.play();
    }
    function onKeyUp(event) {
        switch (event.key) {
            case "z": //d
                Skeleton.speedY = 0;
                break;
            case "q": //s
                Skeleton.speedX = 0;
                break;
            case "s": //a
                Skeleton.speedY = 0;
                break;
            case "d": //w
                Skeleton.speedX = 0;
                break;
        }
    }


    // INIT GAME
    var myInterval = setInterval(animate, 1000 / 30);
    function animate() {
        Units.die();
        context.clearRect(0, 0, canvas.width, canvas.height);
        Units.display(context, canvas.width, canvas.height);
    }
    
}