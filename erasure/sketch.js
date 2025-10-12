let desiTint = 255;
let desiImages = [];
let westImages = [];

// center images
let rippedPaper, desiGirl, overlap1, overlap2;

function setup() {
  createCanvas(435, 563);
  
  rippedPaper = loadImage("assets/ripped.png");
  desiGirl = loadImage("assets/girl.png");
  overlap1 = loadImage("assets/dupatta2.png");
  overlap2 = loadImage("assets/dupatta1.png");
}


// load the images and set up the array
function preload() {
desiImages = [
  {img:loadImage("assets/paki7.jpg"),x:100,y:-20,startX:100,endX:435, startY:0,endY:350,alpha:255,resize:500},
  
  {img:loadImage("assets/paki1.jpg"),x:0,y:-30,startX:0,endX:195, startY:0,endY:175,alpha:255,resize:200},
  
  {img:loadImage("assets/paki3.png"),x:0,y:310,startX:0,endX:140, startY:390,endY:563,alpha:255,resize:190},
  
   {img:loadImage("assets/paki2.jpg"),x:0,y:180,startX:0,endX:135, startY:180,endY:389,alpha:255,resize:140},
  
  {img:loadImage("assets/paki4.jpg"),x:280,y:0,startX:280,endX:435, startY:0,endY:200,alpha:255,resize:220},
  
  {img:loadImage("assets/paki6.png"),x:265,y:230,startX:305,endX:435, startY:145,endY:295,alpha:255,resize:170},
  
  {img:loadImage("assets/paki5.png"),x:280,y:140,startX:290,endX:435, startY:285,endY:563,alpha:255,resize:170}
]

westImages = [
  {img:loadImage("assets/west8.jpg"),x:230,y:260,alpha:255,resize:270},
  
 {img:loadImage("assets/west7.png"),x:100,y:-150,alpha:255,resize:300},
  
  {img:loadImage("assets/west1.jpg"),x:-50,y:-30,alpha:255,resize:300},
  
  {img:loadImage("assets/west2.png"),x:-20,y:130,alpha:255,resize:200},
  
  {img:loadImage("assets/west3.jpg"),x:0,y:350,alpha:255,resize:150},
  
  {img:loadImage("assets/west4.png"),x:280,y:-50,alpha:255,resize:230},
  
  {img:loadImage("assets/west5.png"),x:250,y:100,alpha:255,resize:230},
  
   {img:loadImage("assets/west6.png"),x:280,y:250,alpha:255,resize:230},
  
]
  
}

function draw() {
  background(220);
  
  drawImgs();
  
  // draw center image
  // girl
  tint(desiTint,255);
  desiGirl.resize(180,0);
  image(desiGirl,140,110);
  
  // paper
  tint(255,255);
  rippedPaper.resize(240,0);
  image(rippedPaper,109,3);
  
  // scarf overlap
  tint(desiTint,255);
  overlap1.resize(200,0);
  image(overlap1,10,286);
  overlap2.resize(120,0);
  image(overlap2,274,265);
}

function drawImgs () {
  //draw the images
  for (let i = 0; i < westImages.length; i++) {
    tint(255,westImages[i].alpha);
    westImages[i].img.resize(westImages[i].resize,0);
    image(westImages[i].img,westImages[i].x,westImages[i].y);  
  }
  
  for (let i = 0; i < desiImages.length; i++) {
    tint(255,desiImages[i].alpha);
    desiImages[i].img.resize(desiImages[i].resize,0);
    image(desiImages[i].img,desiImages[i].x,desiImages[i].y);
  }
}

function mouseMoved() {
  // detect collision with images
  for (let i = 0; i < desiImages.length; i++) {
    if (mouseX > desiImages[i].startX && mouseX < desiImages[i].endX && mouseY > desiImages[i].startY && mouseY < desiImages[i].endY) {
      // blur then make the image slowly disappear
      // and fade girl to darker tint
      desiImages[i].img.filter(BLUR,5);
      if (desiImages[i].alpha > 0) {
        desiImages[i].alpha -= 20;
        if (desiTint > 100) {
          desiTint -= 4;
        }
      }
    }
  }
}


// image sources


// center:

// girl: https://pin.it/6gJ66qkM3 
// ripped paper: https://pin.it/7AsVeiYkf


// south asian collage:

// hand chain: https://pin.it/1rTcjFhxW 
// bangles: https://pin.it/2wimTJJ1N
// mendhi: https://pin.it/H4JP4jFD1 
// writing: https://www.dawn.com/news/1721936
// clothing 1 top right: https://pin.it/2xItqR3Ip 
// chai: https://pin.it/sOVqhLQ58
// clothing 2 bottom right: https://pin.it/6JtbxealL


// western collage:

// hand chain: https://pin.it/5eFjl9e1X 
// bangles: https://www.ready-made.co/cdn/shop/products/DSC05866_1200x1200.jpg?v=1678385275
// henna: https://pin.it/GEbL50Kbc 
// writing: https://bibliotography.com/cdn/shop/products/LITTLEWOMN_1024x1024@2x.jpg?v=1613735048 
// clothing 1: https://pin.it/3IMpDkXre 
// chai latte: https://pin.it/53GigRkhE 
// clothing 2: https://pin.it/2d5ByBRMO



