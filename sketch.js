
var bg,sleep, brush, gym, eat, bath, move;
var astronaut;

function preload(){
  bg= loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation( "gym1.png","gym2.png");
}

function setup() {
  createCanvas(600, 500);
  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white");
  text("Instructions :", 20,35);
  textSize(15);
  text("Up Arrow = Brushing ", 20,55);
  text("Down Arrow = Gyming", 20,70);
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  
  
  if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

    
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
  astronaut.velocityY = 0;
    
  }
  
  if(keyDown("LEFT_ARROW")){
    
  }
  
  if(keyDown("RIGHT_ARROW")){
    
  }

  if(keyDown("m")){
    
  }

}
