const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var b1, b2, b3, b4;
var h1, h2, h3, h4, h5, h6, h7, h8;
var stick;
var P1ball1, P1ball2, P1ball3, P1ball4, P1ball5, P1ball6, P1ball7;
var P2ball1, P2ball2, P2ball3, P2ball4, P2ball5, P2ball6, P2ball7;
var CommonLastBall;
var tempBall;
var mainball;
var bg, bgImg;
var mx, my;
var no = 1;
var balls = [];
var goal = 0;
var holeSound, stickSound, borderSound, balltoballSound;


var P1score = 0;
var P2score = 0;



function preload (){

  holeSound = loadSound("Hole.wav");
  stickSound = loadSound("Strike.wav");
  borderSound = loadSound("Side.wav");
  balltoballSound = loadSound("BallsCollide.wav");

 


}


function setup() {
  createCanvas(900,1600);

  
  /*
  
  bg = createSprite(450, 800, 450, 550);
  bg.addImage("qw", bgImg);
  bg.scale = 0.83;

  */


  //createSprite(400, 200, 50, 50);



  engine = Engine.create();
  world = engine.world;




//  bg = new backGround(0, 0, 900, 1600);
 

  b1 = new Border(47, 430, 30, 660);
  b2 = new Border(450, 33, 700, 30);
  b3 = new Border(855, 430, 30, 660);
  b4 = new Border(450, 1565, 700, 30);
  b5 = new Border(47, 1170, 30, 660);
  b6 = new Border(855, 1170, 30, 660);
  

  

  h1 = new Hole(85, 65, 70);
  h2 = new Hole(85, 1535, 70);
  h3 = new Hole(825, 65, 70);
  h4 = new Hole(825, 1535, 70);
  h5 = new Hole(60, 800, 70);
  h6 = new Hole(840, 800, 70);


  P1ball1 = new Player1Ball(450, 540, 10);
  P1ball2 = new Player1Ball(472, 500, 10);
  P1ball3 = new Player1Ball(405, 460, 10);
  P1ball4 = new Player1Ball(427, 420, 10);
  P1ball5 = new Player1Ball(517, 420, 10);
  P1ball6 = new Player1Ball(495, 380, 10);
  P1ball7 = new Player1Ball(450, 380, 10);

  P2ball1 = new Player2Ball(472, 420, 10);
  P2ball2 = new Player2Ball(427, 500, 10);
  P2ball3 = new Player2Ball(382, 420, 10);
  P2ball4 = new Player2Ball(360, 380, 10);
  P2ball5 = new Player2Ball(405, 380, 10);
  P2ball6 = new Player2Ball(495, 460, 10);
  P2ball7 = new Player2Ball(540, 380, 10);
 

  CommonLastBall = new LastBall(450, 460, 10);

  mainball = new mainBall(420, 1150, 30);
  
//  stick = new Stick(420, 1220, 10, 250);




 // tempBall = new TempBall(300, 200, 70);





  // stick = new Stick();
 /*
  for (var q = 1; q<=5; q++){
    for (var w = 550; w<=650; w = w+20){
     for (var x = 400; x<=500; x = x+20){   
   
      balls.push(new Ball(x, w, 20))
    no+=1;
    if (no>=5){
      return;
    }
    }
  } 
}
*/
  
}

function draw() {
  background(255,255,255);


  textSize(18);
  text("Player 1 Score : "+P1score,40,40);
  fill("black");

  textSize(18);
  text("Player 2 Score : "+P2score,200,80);
  fill("black");

  Engine.update(engine);

  


  /*
  if (P1ball1.isTouching(h1) || (P1ball2.isTouching(h1)) || (P1ball3.isTouching(h1)) || (P1ball4.isTouching(h1)) || (P1ball5.isTouching(h1)) || (P1ball6.isTouching(h1)) || P1ball7.isTouching(h1) ||
      P1ball1.isTouching(h2) || (P1ball2.isTouching(h2)) || (P1ball3.isTouching(h2)) || (P1ball4.isTouching(h2)) || (P1ball5.isTouching(h2)) || (P1ball6.isTouching(h2)) || P1ball7.isTouching(h2) ||
      P1ball1.isTouching(h3) || (P1ball2.isTouching(h3)) || (P1ball3.isTouching(h3)) || (P1ball4.isTouching(h3)) || (P1ball5.isTouching(h3)) || (P1ball6.isTouching(h3)) || P1ball7.isTouching(h3) ||
      P1ball1.isTouching(h4) || (P1ball2.isTouching(h4)) || (P1ball3.isTouching(h4)) || (P1ball4.isTouching(h4)) || (P1ball5.isTouching(h4)) || (P1ball6.isTouching(h4)) || P1ball7.isTouching(h4) ||
      P1ball1.isTouching(h5) || (P1ball2.isTouching(h5)) || (P1ball3.isTouching(h5)) || (P1ball4.isTouching(h5)) || (P1ball5.isTouching(h5)) || (P1ball6.isTouching(h5)) || P1ball7.isTouching(h5) ||
      P1ball1.isTouching(h6) || (P1ball2.isTouching(h6)) || (P1ball3.isTouching(h6)) || (P1ball4.isTouching(h6)) || (P1ball5.isTouching(h6)) || (P1ball6.isTouching(h6)) || P1ball7.isTouching(h6) 
     )
   {
P1ball1.destroy();
P1ball2.destroy();
P1ball3.destroy();
P1ball4.destroy();
P1ball5.destroy();
P1ball6.destroy();
P1ball7.destroy();


 P1score = P1score+1;
 holeSound.play();





  }

*/

  mx = mouseX;
  my = mouseY;
  
  strokeWeight(4);
  stroke("yellow");
  line (420, 1220, mx, my);

  



 // bg.display();
 
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();

  h1.display();
  h2.display();
  h3.display();
  h4.display();
  h5.display();
  h6.display();
  

  P1ball1.display();
  P1ball2.display();
  P1ball3.display();
  P1ball4.display();
  P1ball5.display();
  P1ball6.display();
  P1ball7.display();


  P2ball1.display();
  P2ball2.display();
  P2ball3.display();
  P2ball4.display();
  P2ball5.display();
  P2ball6.display();
  P2ball7.display();

  CommonLastBall.display();
  
  mainball.display();

 // stick.display();

 // tempBall.display();
 
 /*
  detectCollision(h1, tempBall);
  detectCollision(h2, tempBall);
  detectCollision(h3, tempBall);
  detectCollision(h4, tempBall);
  detectCollision(h5, tempBall);
  detectCollision(h6, tempBall);
*/

detectCollision(h1, P1ball1);
detectCollision(h1, P1ball2);
detectCollision(h1, P1ball3);
detectCollision(h1, P1ball4);
detectCollision(h1, P1ball5);
detectCollision(h1, P1ball6);
detectCollision(h1, P1ball7);
detectCollision(h1, P2ball1);
detectCollision(h1, P2ball2);
detectCollision(h1, P2ball3);
detectCollision(h1, P2ball4);
detectCollision(h1, P2ball5);
detectCollision(h1, P2ball6);
detectCollision(h1, P2ball7);

detectCollision(h2, P1ball1);
detectCollision(h2, P1ball2);
detectCollision(h2, P1ball3);
detectCollision(h2, P1ball4);
detectCollision(h2, P1ball5);
detectCollision(h2, P1ball6);
detectCollision(h2, P1ball7);
detectCollision(h2, P2ball1);
detectCollision(h2, P2ball2);
detectCollision(h2, P2ball3);
detectCollision(h2, P2ball4);
detectCollision(h2, P2ball5);
detectCollision(h2, P2ball6);
detectCollision(h2, P2ball7);

detectCollision(h3, P1ball1);
detectCollision(h3, P1ball2);
detectCollision(h3, P1ball3);
detectCollision(h3, P1ball4);
detectCollision(h3, P1ball5);
detectCollision(h3, P1ball6);
detectCollision(h3, P1ball7);
detectCollision(h3, P2ball1);
detectCollision(h3, P2ball2);
detectCollision(h3, P2ball3);
detectCollision(h3, P2ball4);
detectCollision(h3, P2ball5);
detectCollision(h3, P2ball6);
detectCollision(h3, P2ball7);

detectCollision(h4, P1ball1);
detectCollision(h4, P1ball2);
detectCollision(h4, P1ball3);
detectCollision(h4, P1ball4);
detectCollision(h4, P1ball5);
detectCollision(h4, P1ball6);
detectCollision(h4, P1ball7);
detectCollision(h4, P2ball1);
detectCollision(h4, P2ball2);
detectCollision(h4, P2ball3);
detectCollision(h4, P2ball4);
detectCollision(h4, P2ball5);
detectCollision(h4, P2ball6);
detectCollision(h4, P2ball7);

detectCollision(h5, P1ball1);
detectCollision(h5, P1ball2);
detectCollision(h5, P1ball3);
detectCollision(h5, P1ball4);
detectCollision(h5, P1ball5);
detectCollision(h5, P1ball6);
detectCollision(h5, P1ball7);
detectCollision(h5, P2ball1);
detectCollision(h5, P2ball2);
detectCollision(h5, P2ball3);
detectCollision(h5, P2ball4);
detectCollision(h5, P2ball5);
detectCollision(h5, P2ball6);
detectCollision(h5, P2ball7);

detectCollision(h6, P1ball1);
detectCollision(h6, P1ball2);
detectCollision(h6, P1ball3);
detectCollision(h6, P1ball4);
detectCollision(h6, P1ball5);
detectCollision(h6, P1ball6);
detectCollision(h6, P1ball7);
detectCollision(h6, P2ball1);
detectCollision(h6, P2ball2);
detectCollision(h6, P2ball3);
detectCollision(h6, P2ball4);
detectCollision(h6, P2ball5);
detectCollision(h6, P2ball6);
detectCollision(h6, P2ball7);


detectCollision1(mainball, P1ball1);
detectCollision1(mainball, P1ball2);
detectCollision1(mainball, P1ball3);
detectCollision1(mainball, P1ball4);
detectCollision1(mainball, P1ball5);
detectCollision1(mainball, P1ball6);
detectCollision1(mainball, P1ball7);
detectCollision1(mainball, P2ball1);
detectCollision1(mainball, P2ball2);
detectCollision1(mainball, P2ball3);
detectCollision1(mainball, P2ball4);
detectCollision1(mainball, P2ball5);
detectCollision1(mainball, P2ball6);
detectCollision1(mainball, P2ball7);



  for(i = 0; i<balls.length; i++){
    balls[i].display()
  }


  //drawSprites();
}


function detectCollision(hole, ball){
  //console.log(hole.body.position.x);
  if(hole.body.position.x - ball.body.position.x < hole.radius/2 + ball.radius/2 &&  
   ball.body.position.x  - hole.body.position.x < hole.radius/2 + ball.radius/2 &&
   hole.body.position.y - ball.body.position.y < hole.radius/2 + ball.radius/2 &&  
   ball.body.position.y  - hole.body.position.y < hole.radius/2 + ball.radius/2)
  {
    text ("Goal",200,200);
    // Matter.Body.setStatic(hole.body, false);
    goal = 1;
  }
}

function keyPressed(){
  if (keyCode === 65 || keyCode === 97){
    Matter.Body.setStatic(mainball.body, false);
    Matter.Body.applyForce(mainball.body, mainball.body.position, {
      x:0, y:-55
    })

  }
  
}

function detectCollision1(hole1, ball1){
  if(hole1.body.position.x - ball1.body.position.x < hole1.radius/2 + ball1.radius/2 &&  
   ball1.body.position.x  - hole1.body.position.x < hole1.radius/2 + ball1.radius/2 &&
   hole1.body.position.y - ball1.body.position.y < hole1.radius/2 + ball1.radius/2 &&  
   ball1.body.position.y  - hole1.body.position.y < hole1.radius/2 + ball1.radius/2)
  {
      console.log(hole1.body.position.x);
      text("yes", 500, 500);
    Matter.Body.setStatic(ball1.body, false);
    Matter.Body.applyForce(ball1.body, ball1.body.position, {
      x:0, y:-55
    })
      }
}