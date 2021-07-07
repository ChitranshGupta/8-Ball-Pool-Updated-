class Stick{
    constructor(x, y, width, height, angle){
        var options = {
            isStatic :true,
            restitution : 0.2,
            friction : 0.6,
            density : 1

        }

        this.body = Bodies.rectangle(x, y, width, height, options);
       // Matter.Body.setAngle( this.body, angle);
          World.add(world,this.body);
        this.width = width;
        this.height = height;

        //this.image = loadImage("sprites/spr_stick.png");



    }

    display(){
        //this.body.position.x = mainball.
        //this.body.position.y = mouseY;
     
        translate(420, 1250);
        var ang = map(mouseX, 0, 900, 0, 360);
        rotate(ang); 
        /*
        mainball.body.angle =mainball.body.angle +10;
        var ang = mainball.body.angle;
        rotate(ang);
        */
        //rectMode(CENTER);
        //console.log(ang);
        
       // rect(this.body.position.x, this.body.position.y, this.width, this.height);

   /*
       if(this.body.position.x - mainBall.position.x < mainBall.width/2 + this.body.width/2 && 
        mainBall.position.x - this.body.position.x < mainBall.width/2 + this.body.width/2 &&
        this.body.position.y - mainBall.position.y < mainBall.height/2 + this.body.height/2 &&
        mainBall.position.y - this.body.position.y < mainBall.height/2 + this.body.height/2)
        {
            stickSound.play();

     }
     */

       rect(0, 0, this.width, this.height);
    }
}