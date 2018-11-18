var canvas = document.getElementById("canvas");
if(!canvas) {
    alert("Impossible de récupérer le canvas");
}

var context = canvas.getContext("2d");
if(!context) {
    alert("Impossible de récupérer le context");
}    