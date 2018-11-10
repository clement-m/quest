window.onload = function()
{
    // LOAD UNIT
    var Units =  new ClassUnits();
    Units.addUnit(new ClassBall());
    var Player = new ClassBall(1, 1, 120, 30, 65);
    Units.addUnit(Player);

    // SET KeyBoad
    window.addEventListener("keydown", onKeyDown, false);
    window.addEventListener("keyup", onKeyUp, false);
    var keyW = false;
    var keyA = false;
    var keyS = false;
    var keyD = false;
    function onKeyDown(event) {
        var key = event.key;
        switch (key) {
            case "z": //d
                
                Player.speedY--;
                console.log(Player.speedY);
                break;
            case "q": //s
                Player.speedX--;
                console.log(Player.speedX);
                break;
            case "s": //a
                Player.speedY++;
                console.log(Player.speedY);
                break;
            case "d": //w
                Player.speedX++;
                console.log(Player.speedX);
                break;
        }
    }
    function onKeyUp(event) {
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


    // INIT GAME
    var myInterval = setInterval(animate, 1000 / 30);
    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        Units.display(context, canvas.width, canvas.height);
        Units.die();
    }
    
}