let Game = new ClassGame(document, window);
let myInterval = setInterval(animate, 1000 / 30);
function animate() {
    Game.run();
}