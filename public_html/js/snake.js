var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHeight;

gameInitialize();
snakeInitialize();
gameDraw();
snakeDraw();
snakeUpdate();

function gameInitialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function gameloop() {
   
}

function gameDraw () {
    context.fillStyle = "rgb(230, 0, 0)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}

function snakeInitialize (){
    snake = [];
    snakeLength = 2;
    snakeSize = 20;
    
    for(var index = snakeLength - 1; index >= 0; index--) {
        snake.push( {
           x: index,
           y: 0
        });
        
    }  
}
    


function snakeDraw () {
    for(var index = 0; index < snake.length; index++) {
        context.fillStyle = "blue";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}

function snakeUpdate () {
    var snakeHeadX =snake[0].x;
    var snakeHeadY =snake[0].y;
    
    snakeHeadX++;
    
    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.x = snakeHeadX;
    snake.unshift(snakeTail);
}