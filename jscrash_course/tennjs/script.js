let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

const maxComputerSpeed = 1.9;

//defining ball size, position and speed
const ballSize = 5;
let ballPosition;

let xSpeed;
let ySpeed;

function initBall() {
  ballPosition = { x: 20, y: 30 };
  xSpeed = -4;
  ySpeed = 2;
}

//defining the paddles
const paddleWidth = 5;
const paddleHeight = 20;
const paddleOffset = 10;

//drawing the paddles - right paddle will be player
let leftPaddleTop = 10;
let rightPaddleTop = 30;

//keeping scores
let leftScore = 0;
let rightScore = 0;
let gameOver = false;

document.addEventListener("mousemove", (e) => {
  rightPaddleTop = e.y - canvas.offsetTop;
});

function draw() {
  //create black 'screen'

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  //all other objects are white
  ctx.fillStyle = "white";

  //draw the ball
  ctx.fillRect(ballPosition.x, ballPosition.y, ballSize, ballSize);

  //draw the paddles
  ctx.fillRect(paddleOffset, leftPaddleTop, paddleWidth, paddleHeight);

  ctx.fillRect(
    width - paddleWidth - paddleOffset,
    rightPaddleTop,
    paddleWidth,
    paddleHeight
  );

  //Drawing the scores
  ctx.font = "40px monospace";
  ctx.textAlign = "left";
  ctx.fillText(leftScore.toString(), 50, 50);
  ctx.textAlign = "right";
  ctx.fillText(rightScore.toString(), width - 50, 50);
}

//telling the computer to follow the ball
function followBall() {
  let ball = {
    top: ballPosition.y,
    bottom: ballPosition.y + ballSize,
  };
  let leftPaddle = {
    top: leftPaddleTop,
    bottom: leftPaddleTop + paddleHeight,
  };

  if (ball.top < leftPaddle.top) {
    leftPaddleTop -= maxComputerSpeed;
  } else if (ball.bottom > leftPaddle.bottom) {
    leftPaddleTop += maxComputerSpeed;
  }
}

function update() {
  ballPosition.x += xSpeed;
  ballPosition.y += ySpeed;
  followBall();
}

function checkPaddleCollision(ball, paddle) {
  //check if the paddle and ball overlap vertically or horizontally
  return (
    ball.left < paddle.right &&
    ball.right > paddle.left &&
    ball.top < paddle.bottom &&
    ball.bottom > paddle.top
  );
}

//allows direction of ball bounce to be modified if hit by ends (or near)
// of paddle
function adjustAngle(distanceFromTop, distanceFromBottom) {
  if (distanceFromTop < 0) {
    ySpeed -= 0.5;
  } else if (distanceFromBottom < 0) {
    ySpeed += 0.5;
  }
}

//get it bouncing off the sides/paddles
function checkCollision() {
  let ball = {
    left: ballPosition.x,
    right: ballPosition.x + ballSize,
    top: ballPosition.y,
    bottom: ballPosition.y + ballSize,
  };

  let leftPaddle = {
    left: paddleOffset,
    right: paddleOffset + paddleWidth,
    top: leftPaddleTop,
    bottom: leftPaddleTop + paddleHeight,
  };

  let rightPaddle = {
    left: width - paddleWidth - paddleOffset,
    right: width - paddleOffset,
    top: rightPaddleTop,
    bottom: rightPaddleTop + paddleHeight,
  };

  if (checkPaddleCollision(ball, leftPaddle)) {
    let distanceFromTop = ball.top - leftPaddle.top;
    let distanceFromBottom = leftPaddle.bottom - ball.bottom;
    adjustAngle(distanceFromTop, distanceFromBottom);
    xSpeed = Math.abs(xSpeed);
  }

  if (checkPaddleCollision(ball, rightPaddle)) {
    let distanceFromTop = ball.top - rightPaddle.top;
    let distanceFromBottom = rightPaddle.bottom - ball.bottom;
    adjustAngle(distanceFromTop, distanceFromBottom);
    xSpeed = -Math.abs(xSpeed);
  }

  if (ball.left < 0) {
    rightScore++;
    initBall();
  }
  if (ball.right > width) {
    leftScore++;
    initBall();
  }

  //update Game Over status
  if (leftScore > 9 || rightScore > 9) {
    gameOver = true;
  }

  if (ball.left < 0 || ball.right > width) {
    xSpeed = -xSpeed;
  }
  if (ball.top < 0 || ball.bottom > height) {
    ySpeed = -ySpeed;
  }
}

// writing GAME OVER
function drawGameOver() {
  ctx.fillStyle = "white";
  ctx.font = "40px monospace";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER", width / 2, height / 2);
}

function gameLoop() {
  draw();
  update();
  checkCollision();
  if (gameOver) {
    draw();
    drawGameOver();
  } else {
    // Call this function again after a timeout
    setTimeout(gameLoop, 25);
  }
}

initBall();
gameLoop();
