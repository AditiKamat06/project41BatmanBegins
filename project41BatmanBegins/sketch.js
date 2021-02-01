const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var drops=[];
var maxDrops=100;
var thunderC = 0;
var thunder,umbrella;

function preload(){
    t1 = loadImage("images/thunderbolt/1.png");
    t2 = loadImage("images/thunderbolt/2.png");  
    t3 = loadImage("images/thunderbolt/3.png");  
    t4 = loadImage("images/thunderbolt/4.png"); 

    b1 = loadImage('images/Walking Frame/walking_1.png');
    b2 = loadImage("images/Walking Frame/walking_2.png");
    b3 = loadImage("images/Walking Frame/walking_3.png");
    b4 = loadImage("images/Walking Frame/walking_4.png");
    b5 = loadImage("images/Walking Frame/walking_5.png");
    b6 = loadImage("images/Walking Frame/walking_6.png");
    b7 = loadImage("images/Walking Frame/walking_7.png");
    b8 = loadImage("images/Walking Frame/walking_8.png");
}

function setup(){
    createCanvas(1600,1600);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella (300,300);

    if(frameCount%60===0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400),random(0,400)));
        }
    }   
}

function draw(){ 
    background(0,0,0);
    Engine.update(engine);
    var rand = Math.round(random(1,4));

    for(var i=0; i<drops.length; i++){
        drops[i].display();
        drops[i].update();
    }  

    umbrella.display();

    if(frameCount%50===0){
        thunder = createSprite(200,50,10,10);
        thunderC = frameCount;
        switch(rand){
            case 1 : umbrella.addImage(b1);
            break;
            case 2 : umbrella.addImage(b2);
            break;
            case 3 : umbrella.addImage(b3);
            break;
            case 4 : umbrella.addImage(b4);
            break;
            case 5 : umbrella.addImage(b5);
            break;
            case 6 : umbrella.addImage(b6);
            break;
            case 7 : umbrella.addImage(b7);
            break;
            case 8 : umbrella.addImage(b8);
            break;
        }

    if(frameCount%50===0){
        thunder = createSprite(200,50,10,10);
        thunderC = frameCount;
        switch(rand){
            case 1 : thunder.addImage(t1);
            break;
            case 2 : thunder.addImage(t2);
            break;
            case 3 : thunder.addImage(t3);
            break;
            case 4 : thunder.addImage(t4);
            break;
        }
        thunder.scale=random(0.2,0.4);
    }

    if(thunderC+10===frameCount && thunder){
        thunder.destroy();
    }

    drawSprites();
}