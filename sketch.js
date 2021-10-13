const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow = [];
var bgImg1, bgImg2, bgImg3
var tree1, tree1Img
var sledge1, sledge
var house, houseImg
var snowman, snowmanImg, snowmanImgs
var kid1, kid1Img, kid2, kid2Img
var kid3, kid3Img, kid3Img2 , kid3Img3
var kid4, kid4Img, pond, pondImg
var skating1, skating1Img, skating2Img
var deerImg, deerImg2
var deer1, deer2, deer3, deer4, deer5, deer6
var reindeer, reindeerImg, bird, redBird
var Dog, children, redBirdSound
var wall1, wall2, wall3, wall7, wall9
var wall4, wall5, wall6 , wall8

function preload(){
	bgImg1 = loadImage("images/snow1.jpg")
	bgImg2 = loadImage("images/forest.png")
	tree1Img = loadImage("images/tree1.png")
	sledge1 = loadAnimation("images/siberian-husky/pull1.png","images/siberian-husky/pull2.png")
	houseImg = loadImage("images/house.png")
	snowmanImgs = loadAnimation("images/snowman/1 copy.png",
							   "images/snowman/1.png",
							   "images/snowman/2 copy.png",
							   "images/snowman/2.png",
							   "images/snowman/3 copy.png",
							   "images/snowman/3.png",
							   "images/snowman/4 copy.png",
							   "images/snowman/4.png",
							   "images/snowman/5 copy.png",
							   "images/snowman/5.png",
							   "images/snowman/6 copy.png",
							   "images/snowman/6.png",
							   "images/snowman/7 copy.png",
							   "images/snowman/7.png",
							   "images/snowman/8 copy.png",
							   "images/snowman/8.png")
	snowmanImg = loadImage("images/snowman/8 copy.png")
	kid1Img = loadAnimation("images/kids/greenMufler1.png","images/kids/greenMufler2.png")
	kid2Img = loadAnimation("images/kids/sitting1.png","images/kids/sitting2.png")
	kid3Img = loadAnimation("images/kids/rolling1.png","images/kids/rolling2.png")
	kid3Img2 = loadAnimation("images/rollingSnowBall/rolling4 copy.png",
							"images/rollingSnowBall/rolling4.png",
							"images/rollingSnowBall/rolling5 copy.png",
							"images/rollingSnowBall/rolling5.png",
							"images/rollingSnowBall/rolling6 copy.png",
							"images/rollingSnowBall/rolling6.png",
							"images/rollingSnowBall/rolling7 copy.png",
							"images/rollingSnowBall/rolling7.png",
							"images/rollingSnowBall/rolling8 copy.png",
							"images/rollingSnowBall/rolling8.png",
							"images/rollingSnowBall/rolling9 copy.png",
							"images/rollingSnowBall/rolling9.png")
	kid3Img3 = loadAnimation("images/rollingSnowBall/rolling9.png")
	pondImg = loadAnimation("images/pond.png")
	skating1Img = loadAnimation("images/kids/skating.png")
	skating2Img = loadAnimation("images/kids/skating2.png")
	deerImg1 = loadAnimation("images/reindeer&deer/1.png",
								"images/reindeer&deer/2.png",
								"images/reindeer&deer/3.png")
	deerImg2 = loadAnimation("images/reindeer&deer/2.png",
								"images/reindeer&deer/3.png",
								"images/reindeer&deer/1.png")
	deerImg3 = loadAnimation("images/reindeer&deer/3.png",
								"images/reindeer&deer/2.png",
								"images/reindeer&deer/1.png")
	reindeerImg = loadAnimation("images/reindeer&deer/a.png",
								"images/reindeer&deer/b.png",
								"images/reindeer&deer/c.png")
	redBird = loadAnimation("images/bird1.png","images/bird1 copy.png","images/bird2.png","images/bird2 copy.png")

	dog = loadSound("dogs.mp3")
	redBirdSound = loadSound("birds.mp3")
	children = loadSound("child.mp3")

}

function setup() {
	var canvas = createCanvas(600,400);
	engine = Engine.create();
	world = engine.world;

	bird = createSprite(10,100)
	bird.addAnimation("redBirdFlying", redBird)
	bird.velocityY = 0.5 * -1
	bird.velocityX = 4
	bird.scale = 0.25
	bird.setCollider("rectangle",150,0,10,100)

	deer1 = createSprite(200,340)
	deer1.addAnimation("running",deerImg1)
	deer1.scale = 0.4
	deer1.visible = false 
	
	reindeer = createSprite(700,330)
	reindeer.addAnimation("jumping",reindeerImg)
	reindeer.scale = 0.4
	
	deer2 = createSprite(175,350)
	deer2.addAnimation("running",deerImg1)
	deer2.scale = 0.2
	deer2.visible = false 

	deer3 = createSprite(125,340)
	deer3.addAnimation("running",deerImg1)
	deer3.scale = 0.4
	deer3.visible = false 

	deer4 = createSprite(150,340)
	deer4.addAnimation("running",deerImg1)
	deer4.scale = 0.4
	deer4.visible = false 

	deer5 = createSprite(215,350)
	deer5.addAnimation("running",deerImg1)
	deer5.scale = 0.2
	deer5.visible = false 

	deer6 = createSprite(225,340)
	deer6.addAnimation("running",deerImg1)
	deer6.scale = 0.4
	deer6.visible = false 

	house = createSprite(250,305)
	house.addImage(houseImg)
	house.scale = 0.75

	snowman = createSprite(100,340)
	snowman.addAnimation("buildingASnowman",snowmanImgs)
	snowman.scale = 0.25

	pond = createSprite(400,330,50,50)
	pond.addAnimation("lake",pondImg)
	pond.scale = 0.4

	skating1 = createSprite(370,340)
	skating1.addAnimation("iceSkating",skating1Img)
	skating1.velocityX = 1
	skating1.scale = 0.25

	kid3 = createSprite(900,340)
	kid3.addAnimation("buildingASnowmankid2", kid3Img)
	kid3.scale = 0.4
	kid3.velocityX = -2

	kid1 = createSprite(76,350)
	kid1.addAnimation("buildingASnowmankid1", kid1Img)
	kid1.scale = 0.45

	kid2 = createSprite(130,360)
	kid2.addAnimation("buildingASnowmankid2", kid2Img)
	kid2.scale = 0.5

	wall1 = createSprite(200,350,10,100)
	wall1.visible = false 
	wall2 = createSprite(-800,350,10,100)
	wall2.visible = false 
	wall3 = createSprite(-1400,350,10,100)
	wall3.visible = false 
	wall4 = createSprite(365,350,10,50)
	wall4.visible = false 
	wall5 = createSprite(480,350,10,50)
	wall5.visible = false 
	wall6 = createSprite(625,350,10,100)
	wall6.visible = false 
	wall7 = createSprite(180,350,10,100)
	wall7.visible = false 
	wall8 = createSprite(180,50,10,100)
	wall8.visible = false
	wall9 = createSprite(-1000,350,10,100)
//	wall9.visible = false
	
	sledge = createSprite(600,355)
	sledge.addAnimation("pulling",sledge1)
	sledge.setCollider("rectangle",-100,0,10,100)
	sledge.velocityX = -4


	tree1 = createSprite(515,150)
	tree1.addImage(tree1Img)
	tree1.scale = 1.2

}


function draw() {
	Engine.update(engine);
	background(bgImg1);

	image(bgImg2,0,-10,600,410)

	if(sledge.isTouching(wall1)){
		snowman.addAnimation("done!",snowmanImg)
		snowman.changeAnimation("done!")
		dog.play()
	}

	if(sledge.isTouching(wall2)){
		kid3.addAnimation("done",kid3Img2)
		kid3.changeAnimation("done")
		kid3.velocityX = 0
	}

	if(sledge.isTouching(wall9)){
		kid3.addAnimation("done1",kid3Img3)
		kid3.changeAnimation("done1")
	}

	if(sledge.isTouching(wall3)){
		deer1.velocityX = 3
		deer2.velocityX = 3
		deer3.velocityX = 3
		deer4.velocityX = 3
		deer5.velocityX = 3
		deer6.velocityX = 3
		deer1.visible = true 
		deer2.visible = true 
		deer3.visible = true 
		deer4.visible = true 
		deer5.visible = true 
		deer6.visible = true 
		children.play()

	}

	if(deer3.isTouching(wall6)){
		reindeer.velocityX = -4
	}

	if(reindeer.isTouching(wall7)){
		reindeer.visible = false
	}

	if(bird.isTouching(wall8)){
		redBirdSound.play()
	}

	if(skating1.isTouching(wall5)){
		skating1.addAnimation("skatingBack",skating2Img)
		skating1.changeAnimation("skatingBack")
		skating1.velocityX = -1
	}

	if(skating1.isTouching(wall4)){
		skating1.addAnimation("iceSkating",skating1Img)
		skating1.changeAnimation("iceSkating")
		skating1.velocityX = 1
	}

	if(frameCount % 20 === 0){
		snow.push(new Snowflake(random(0,600),0))
	   }


	for (var a = 0; a < snow.length; a++) {
		  snow[a].display();   
	}

	drawSprites(); 
}