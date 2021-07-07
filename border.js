class Border{
    constructor(x, y, width, height){
        var options = {
            isStatic :true,
            restitution : 0.6,
            friction : 0.6,
            density : 1

        }

        this.body = Bodies.rectangle(x, y, width, height, options);
//        Matter.Body.setAngle( this.body, angle);
          World.add(world,this.body);
        this.width = width;
        this.height = height;



    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

/*
        if(this.body.position.x - Player1Ball.position.x < Player1Ball.width/2 + this.body.width/2 && 
           Player1Ball.position.x - this.body.position.x < Player1Ball.width/2 + this.body.width/2 &&
           this.body.position.y - Player1Ball.position.y < Player1Ball.height/2 + this.body.height/2 &&
           Player1Ball.position.y - this.body.position.y < Player1Ball.height/2 + this.body.height/2)
           {
               borderSound.play();

        }

        if(this.body.position.x - Player2Ball.position.x < Player2Ball.width/2 + this.body.width/2 && 
            Player2Ball.position.x - this.body.position.x < Player2Ball.width/2 + this.body.width/2 &&
            this.body.position.y - Player2Ball.position.y < Player2Ball.height/2 + this.body.height/2 &&
            Player2Ball.position.y - this.body.position.y < Player2Ball.height/2 + this.body.height/2)
            {
                borderSound.play();
 
         }
         */
    }
}