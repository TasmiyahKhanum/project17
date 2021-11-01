var sea,seaimg;
var surfer,surferimg;
var cone,coneimg;
var island,islandimg;
var blackhole,blackholeimg;
var rock,rockimg;
var surfer2,surfer2img;
var score=0;
var PLAY=1;
var END=0;
var gamestate=1;
var gmo,gmoimg;
var restart,restartimg;
var gameover;

function preload(){
seaimg=loadImage("sea.png");
surferimg=loadImage("surfer.png");
coneimg=loadImage("cone.png");
islandimg=loadImage("island.png");
blackholeimg=loadImage("blackhole.png");
rockimg=loadImage("rocks.png");
surfer2img=loadImage("surfer2.png");
gmoimg=loadImage("Gameover.png");
restartimg=loadImage("restart.png");
gameover=loadSound("gameover (2).wav");
}

function setup(){
createCanvas(600,400);
background("black");
sea=createSprite(200,200);
sea.addImage(seaimg);
sea.scale=0.9
sea.velocityY = -4;
surfer=createSprite(300,50);
surfer.addImage(surferimg);
surfer.scale=0.1;
coneG = new Group();
islandG = new Group();
blackholeG = new Group();
rocksG = new Group();
surferG = new Group();
gmo=createSprite(300,200);
gmo.addImage(gmoimg);
gmo.scale=0.5;
restart=createSprite(300,250);
restart.addImage(restartimg);
restart.scale=0.5;
}

function draw(){
  
if(gamestate==1){
gmo.visible=false;
restart.visible=false;
if(sea.y < 0 ){
sea.y = height/2;
}
surfer.x=World.mouseX;
score = score + Math.round(getFrameRate()/50);
sea.velocityY = -(2 + 2*score/150);
if(surfer.isTouching(coneG)||surfer.isTouching(islandG)||surfer.isTouching(blackholeG)||surfer.isTouching(rocksG)||surfer.isTouching(surferG)){
gamestate=END;
gameover.play();
}
}

else if (gamestate==END){
gmo.visible=true;
restart.visible=true;
sea.velocityY=0;
surfer.x=300;
surfer.y=50;
coneG.destroyEach();
islandG.destroyEach();
blackholeG.destroyEach();
rocksG.destroyEach();
surferG.destroyEach();
//gameover.play();
if(mousePressedOver(restart)){
reset();
}
}

drawSprites();
coneobstruction();
islandobstruction();
blackholeobstruction();
rockobstruction();
surferobstruction();
fill("white");
text("Score: "+score,500,30)
}

function reset(){
gamestate=PLAY;
coneG.destroyEach();
islandG.destroyEach();
blackholeG.destroyEach();
rocksG.destroyEach();
surferG.destroyEach();
score=0;
}

function coneobstruction(){
if(frameCount%60==0){
cone=createSprite(Math.round(random(40,550)),200);
cone.addImage(coneimg);
cone.scale=0.1;
cone.velocityY=-3;
cone.lifetime=90;
coneG.add(cone);
}
}

function islandobstruction(){
if(frameCount%190==0){
island=createSprite(Math.round(random(40,590)),200);
island.addImage(islandimg);
island.scale=0.08;
island.velocityY=-3;
island.lifetime=90;
islandG.add(island);
}
}

function blackholeobstruction(){
if(frameCount%270==0){
blackhole=createSprite(Math.round(random(40,590)),200);
blackhole.addImage(blackholeimg);
blackhole.scale=0.08;
blackhole.velocityY=-3;
blackhole.lifetime=90;
blackholeG.add(blackhole);
}
}

function rockobstruction(){
if(frameCount%100==0){
rock=createSprite(Math.round(random(40,590)),200);
rock.addImage(rockimg);
rock.scale=0.02;
rock.velocityY=-3;
rock.lifetime=90;
rocksG.add(rock);
}
}

function surferobstruction(){
  if(frameCount%200==0){
  surfer2=createSprite(Math.round(random(40,590)),200);
  surfer2.addImage(surfer2img);
  surfer2.scale=0.1;
  surfer2.velocityY=-3;
  surfer2.lifetime=90;
  surferG.add(surfer2);
  }
  }
 
