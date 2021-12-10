var run;
var run_image;
var pista;
var pista_image
var pista2,pista3;
var power;
var c1,c2,c3;
function preload(){
  //imagens pré-carregadas
  run_image=loadAnimation("Runner-2.png","Runner-1.png")
  pista_image=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  pista=createSprite(200,200,200,200);
  pista.addImage("rua",pista_image);
  pista.scale=1
  pista.timelife=200;
  pista2=createSprite(400,200,150,400);
  pista3=createSprite(0,200,150,400);
  pista2.visible=false
  pista3.visible=false
  run=createSprite(200,360,10,10);
  run.addAnimation("corredor",run_image);
  run.scale=0.05;
  //power=createSprite(200)

}

function draw() {
  background(0);
drawSprites();

if(keyDown("d")){
  run.x=300;
}
if(keyDown("a")){
  run.x=100;
}
if(keyDown("s")){
  run.x=200;
}
pista.velocityY = 10
if(pista.y>100){
  pista.y=pista.width/2
  pista.y=0
}
}



