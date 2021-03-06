const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pin1;



function preload(){
  backgroundImg = loadImage("sprites/bg2.jpg");
}

function setup(){
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800,696,1600,20);
  ground2 = new Ground2(1400,250,400,5);
  ground3 = new Ground2(1200,90,5,200);
  ground4 = new Ground2(1400,450,400,5)
  ground5 = new Ground2(1200,350,5,100);
  ground6 = new Ground2(750,150,400,5);
  

  pin1 = new Pin(1400,230,40,60);
  pin2 = new Pin(1440,230,40,60);
  pin3 = new Pin(1480,230,40,60);
  pin4 = new Pin(1360,230,40,60);
  pin5 = new Pin(1320,230,40,60);
  pin6 = new Pin(1280,230,40,60);
  pin7 = new Pin(1240,230,40,60);

  pin8 = new Pin(1400,430,40,60);
  pin9 = new Pin(1440,430,40,60);
  pin10 = new Pin(1480,430,40,60);
  pin11 = new Pin(1360,430,40,60);
  pin12 = new Pin(1320,430,40,60);
  pin13 = new Pin(1280,430,40,60);
  pin14 = new Pin(1240,430,40,60);

  pin15 = new Pin(750,130,40,60);
  pin16 = new Pin(710,130,40,60);
  pin17 = new Pin(790,130,40,60);
  pin18 = new Pin(670,130,40,60);
  pin19 = new Pin(630,130,40,60);
  pin20 = new Pin(830,130,40,60);
  pin21 = new Pin(870,130,40,60);


  ball = new Ball(600,690,60,60);

  slingshot = new SlingShot(ball.body,{x:200, y:300});

  
}


function draw(){
    background(backgroundImg);
    
  
    strokeWeight(4);
    textSize(35);
    fill("blue");
    text("Pull the ball and hit the pins, ENJOY!!" , 300, 50);
   


    
 

    Engine.update(engine);

  

    ground.display();
    

    ground2.display();

    ground3.display();

    ground4.display();

    ground5.display();

    ground6.display();

    
    
   

    pin1.display();
    pin2.display();
    pin3.display();
    pin4.display();
    pin5.display();
    pin6.display();
    pin7.display();

    pin8.display();
    pin9.display();
    pin10.display();
    pin11.display();
    pin12.display();
    pin13.display();
    pin14.display();

    pin15.display();
    pin16.display();
    pin17.display();
    pin18.display();
    pin19.display();
    pin20.display();
    pin21.display();

    ball.display();

    slingshot.display();

    
}


function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode == 32){
      slingshot.attach(ball.body);
  }
}

