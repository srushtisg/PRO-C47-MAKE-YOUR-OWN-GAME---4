var sun;
var asteroid1;var asteroid2;var spaceship;var laser;var night;
var PLAY;
var END;
var gameState = PLAY;
function preload(){
sunImage = loadImage("sun.jpg");
asteroidImage = loadImage("Asteroid.jpg");
spaceshipImage = loadImage("spaceship.png");
laserImage = loadImage("laser.jpg");
backgroundImg = loadImage("night.jpg");
}

function setup(){
    canvas = createCanvas(2000,2000);
    sun = createSprite(750,330,20,50);
    sun.addImage("sun",sunImage);
    sun.scale = 0.5;
     spaceship = createSprite(mouseX,mouseY,60,70);
    spaceship.addImage("spaceship",spaceshipImage);
    spaceship.scale = 0.2;
    
   asteroid1 = createSprite(100,10,20,50);
   asteroid1.addImage("asteroid1",asteroidImage);
   asteroid1.scale = 0.2;
   asteroid2 = createSprite(200,30,20,50);
   asteroid2.addImage("asteroid1",asteroidImage);
   asteroid2.scale = 0.2;
}
function draw(){
 background(backgroundImg);
 
 spaceship.x = World.mouseX;
   spaceship.y = World.mouseY;
   spawnAsteroid();

 if (asteroid1.isTouching(spaceship)){
   asteroid1.destory()
 }
   
 drawSprites();
}
function spawnAsteroid() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var asteroid1 = createSprite(700,500,100,20);
    asteroid1.y = Math.round(random(80,300));
   asteroid1.addImage(asteroidImage);
    asteroid1.scale = 0.5;
    asteroid1.velocityX = -3;
    asteroid1.scale = 0.2;
  }
}
