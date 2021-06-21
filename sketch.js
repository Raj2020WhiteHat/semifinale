var bow , arrow,  bkg, redB, pinkB, greenB ,blueB ,arrowGroup,arrow3Group;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var boss,bossI;
var score;
var intense;
var gameState = 'PLAY';

var arrayToStorePos =[];
var defeat,defeatI;
var arrowAttack;
var arrow3,arrow3I;

var invisiblebar;
var bar;

function preload(){ 
  
  defeatI = loadImage("you lost.jpg");
  arrow3I = loadImage("missilemain-removebg-preview.png");
  bossI = loadImage("maharaja.png");
  bkgI = loadImage("gamebck.jpg");
  arrowImage = loadImage("missile__2_-removebg-preview-removebg-preview (1).png");
  bowImage = loadImage("hero-removebg-preview.png");
  red_balloonImage = loadImage("alien_baba-removebg-preview1.png");
  green_balloonImage = loadImage("alien_chacha-removebg-preview2.png");
  pink_balloonImage = loadImage("marpitai.png");
  blue_balloonImage = loadImage("alien-removebg-preview4.png");
  intense = loadSound("Alan Walker  Fade NCS Release.mp3");
  
}



function setup() {
  createCanvas(800, 500);
  
  if(gameState === 'PLAY'){
    intense.loop();
  }
  
  
  //creating background
  bkg = createSprite(400,250,800,500);
  bkg.addImage(bkgI);
  bkg.scale = 3;
  // creating bow to shoot arrow
  bow = createSprite(330,410,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.3;
 
  
   score = 0  
  redB= new Group();
  greenB= new Group();
   blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
  arrow3Group = new Group();
  
  invisiblebar = createSprite(700,50,120,20);
  bar = createSprite(700,50,120,20);
  bar.shapeColor= "green";

  invisiblebar.visble = false;
  bar.visble=false;
  
}

function draw() {

  background("black");
  // moving ground
    background.velocityX = -2       

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.x = World.mouseX
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
 
  
if(score<30000){
  var select_balloon = Math.round(random(1,5));
  
  if (World.frameCount % 30 == 0) {
   
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else if (select_balloon == 4) {
      pinkBalloon();
    } 
    
  }
 
}

  if(World.frameCount % 80 == 0)
  arrowAttack();
 
  
  
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1000;
}



 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1000;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1000;
}

if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1000;
}
 

if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1000;
}
 
  
  if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1000;
}
   
  if (arrow3Group.isTouching(bow)){
 // bow.destroyEach();
  arrow3Group.destroyEach();
  score = 0;
  gameState = 'END';
  defeat = createSprite(500,300,1000,500);
  defeat.addImage(defeatI);
  defeat.scale = 2; 
  }

  
  drawSprites();
  text("yellow");
  textSize(20);
    text("YOUR SCORE:-"+ score, 50,50);
  
  if( score >= 1000){
    
    boss = createSprite(400,75,800,500);
    boss.addImage(bossI);
    boss.scale = 0.7;
    blueB.destroyEach();
    redB.destroyEach();
    greenB.destroyEach();
    pinkB.destroyEach();
 
    invisiblebar.visble = true;
    bar.visble=true;

      
    if(frameCount % 80 ===0)
      arrowAttack();
    

      if(bow.isTouching(boss)){

        bar.width = bar.width-10;
      }
     }

 
     
  
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 250)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 6;
  red.lifetime = 150;
  red.scale = 0.5 ; 
  redB.add(red);


  
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 250)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 7;
  blue.lifetime = 150;
  blue.scale = 0.5;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 250)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 6;
  green.lifetime = 150;
  green.scale = 0.5;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 250)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 6;
  pink.lifetime = 150;
  pink.scale = 0.3;
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(330,480,20,50);
  arrow.addImage(arrowImage);
  
  arrow.x=bow.x;
  arrow.velocityY = -20;
  arrow.lifetime = 100;
  arrow.scale = 0.2      ;
  arrowGroup.add(arrow);
   
}
function arrowAttack() {
  var arrow3 = createSprite(random(50,700),random(10,40), 10, 10);
  arrow3.addImage(arrow3I);
  
  arrow3.lifetime = 150;

  //if(arrow3.lifetime=== (Math.round(random(40,100))))
    arrow3.velocityY = 8;
  arrow3.scale = 0.3;
  arrow3Group.add(arrow3);
}