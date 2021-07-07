class Player1Ball{
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


        this.image = loadImage("RedBall2.png");

        


    }

    display(){
        fill("red");
        ellipseMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

/*
        if(this.body.position.x - Player2Ball.position.x < Player2Ball.width/2 + this.body.width/2 && 
            Player2Ball.position.x - this.body.position.x < Player2Ball.width/2 + this.body.width/2 &&
            this.body.position.y - Player2Ball.position.y < Player2Ball.height/2 + this.body.height/2 &&
            Player2Ball.position.y - this.body.position.y < Player2Ball.height/2 + this.body.height/2)
            {
                balltoballSound.play();
    
         }
         */

    }
}