class Player2Ball{
    constructor(x, y, radius){
        var options = {
            isStatic : true,
            restitution : 0.6,
            friction : 1.2,
            density : 1
            

        }



        this.body = Bodies.circle(x, y, radius, options);
 //       Matter.Body.setAngle( this.body, angle);
          World.add(world,this.body);
        this.width = radius;
        this.height = radius;


        this.image = loadImage("spr_yellowBall2.png");



    }

    display(){
        fill("yellow");
        ellipseMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
/*
        if(this.body.position.x - Player1Ball.position.x < Player1Ball.width/2 + this.body.width/2 && 
            Player1Ball.position.x - this.body.position.x < Player1Ball.width/2 + this.body.width/2 &&
            this.body.position.y - Player1Ball.position.y < Player1Ball.height/2 + this.body.height/2 &&
            Player1Ball.position.y - this.body.position.y < Player1Ball.height/2 + this.body.height/2)
            {
                balltoballSound.play();
    
         }
*/


    }
}