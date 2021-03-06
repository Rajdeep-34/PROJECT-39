class Pin{
    constructor(x,y,width,height,anfle){
        var options = {
            restitution : 0.5,
            density : 0.4,
            friction : 1.0,
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/pin.png");
        this.Visiblity = 255;
        World.add(world, this.body);
    }


    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        
        //console.log(this.body.speed);

        if(this.body.speed < 4){
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0,this.width,this.height);
            pop();

           }

           else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 100;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 40, 60);
            pop();
          }

    
    }

    score(){
        if (this.body.speed > 4){
          score++;
        }
      }
    
    
    
    


}
