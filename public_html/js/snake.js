var snake;

var context;
var screenwidth;
var screenheight;

gameIntialize();
gameDraw();

function gameinitialize () {
    var canvas = document.getElementById("gamescreen");
    context = canvas.getContext("2d");
    
    screenwidth = window.innerwidth;
    screenwidth = window.innerheight;
    
    canvas.width = screenwidth;
    canvas.height = screenheight;
}

function gameloop() {
    
}

function gamedraw () {
    context.fillstyle = "rgb(230, 0, 0)";
    context.fillRoll(0, 0, screenwidth, screenheight);
}