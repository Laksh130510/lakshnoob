var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,player,tower,edges,towerer,soilder,bgm;
function preload (){
  towerer = loadImage("tower.png");
  soilder = loadImage("1.png");
  bgm = loadSound("laksh.mp3");
}
function setup() {
  createCanvas(400, 400);
 wall1 = createSprite(100, 20,200,10);
 wall2 = createSprite(300, 60,150,10);
 wall3 = createSprite(100, 80,100,10);
 wall4 = createSprite(50, 140,10,130);
 wall5 = createSprite(370, 155,10,200);
 wall6 = createSprite(25, 175,60,10);
 wall7 = createSprite(305, 120,80,10);
 wall8 = createSprite(265, 170,80,10);
 wall9 = createSprite(170, 200,10,80);
 wall10 = createSprite(220, 235,100,10);
 wall11 = createSprite(200, 350,300,10);
 wall12 = createSprite(80, 300,10,100);
 wall13 = createSprite(80, 250,100,10);
 wall14 = createSprite(175, 120,80,10);
  player = createSprite(375, 375,20,30);  
   player.addImage(soilder);
  player.scale = 0.08
tower = createSprite(20,60,20,50);
     tower.addImage(towerer);
  tower.scale = 0.08
tower.shapeColor ="blue";
player.shapeColor ="green";
wall1.shapeColor ="red";
wall2.shapeColor ="red";  
wall3.shapeColor ="red";  
wall4.shapeColor ="red";  
wall5.shapeColor ="red";  
wall6.shapeColor ="red";  
wall7.shapeColor ="red";  
wall8.shapeColor ="red";  
wall9.shapeColor ="red";  
wall10.shapeColor ="red";  
wall11.shapeColor ="red";  
wall12.shapeColor ="red";  
wall13.shapeColor ="red";  
wall14.shapeColor ="red";
  bgm.play()
}

function draw() {
  background("pink");
if (keyDown("left")) {
  player.x= player.x-2
}
if (keyDown("right")) {
  player.x= player.x+2
}
if (keyDown("up")) {
  player.y= player.y-2
}
if (keyDown("down")) {
  player.y= player.y+2
}
  drawSprites()
  if (player.isTouching(wall1)||player.isTouching(wall2)||
     player.isTouching(wall3)||player.isTouching(wall4)||
     player.isTouching(wall5)||player.isTouching(wall6)||
     player.isTouching(wall7)||player.isTouching(wall8)||
     player.isTouching(wall9)||player.isTouching(wall10)||
     player.isTouching(wall11)||player.isTouching(wall12)||
     player.isTouching(wall13)||player.isTouching(wall14))
    {
      player.velocityY=0;
      player.velocityX=0;
      
      bgm.stop();
      
          background("red")
      fill("yellow")
      textSize(40)
      text("You lost",100,200)

}
  if(player.isTouching(tower)){
      background("green")
      fill("white")
      textSize(40)
      text("The tower is yours now")
  }
}