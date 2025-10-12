// interactive timeline
// press SPACE to start
// use the right arrow or D key to move the trucks and go through the timeline
// press SPACE to restart once you get to the end
// sources at bottom of code

let trucks = [];
let endPics = [];

let startingTextX = 400;

let pattern1, pattern2;
let screen = 1; // 1 is the start screen, 2 is the timeline, 3 is the end

let heading;
let subheading;
let body;

function setup() {
  createCanvas(800, 520);
  
  // load fonts
  heading = loadFont('assets/InknutAntiqua-Bold.ttf');
  subheading = loadFont('assets/InknutAntiqua-Medium.ttf');
  body = loadFont('assets/Roboto-VariableFont_wdth,wght.ttf');
  
  // load patterns
  pattern1 = loadImage('assets/pattern1.png');
  pattern2 = loadImage('assets/pattern2.png');
  
  // initialize end pics array 
  endPics.push(loadImage('assets/endPic1.png'));
  endPics.push(loadImage('assets/endPic2.png'));
  endPics.push(loadImage('assets/endPic3.png'));
  
  // initialize trucks array
  trucks.push(new Trucks(loadImage('assets/truck.png'), loadImage('assets/Frame 2.png'),300));
  
  trucks.push(new Trucks(loadImage('assets/truck.png'), loadImage('assets/Frame 3.png'),300));
  
  trucks.push(new Trucks(loadImage('assets/truck.png'), loadImage('assets/Frame 7.png'),300));
  
  trucks.push(new Trucks(loadImage('assets/truck.png'), loadImage('assets/Frame 4.png'),300));
  
  trucks.push(new Trucks(loadImage('assets/truck.png'), loadImage('assets/Frame 5.png'),300));
}

function draw() {
  background(244, 239, 233);
  
  if (screen == 1) {
    // draw the instructions / intro
    // background
    fill(133, 44, 34);
    rect(0,0,800,520);
    pattern1.resize(940,0);
    image(pattern1,-80,-50);
    noFill();
    stroke(255,195,0);
    strokeWeight(25);
    rect(0,0,800,520);
    // text
    textAlign(CENTER, CENTER);
    textFont(heading);
    noStroke();
    fill(255, 247, 231);
    textSize(30);
    text("The History of",width/2,70);
    text("Pakistan Truck Art",width/2,120);
    // divider
    fill(255,195,0);
    rect(160,180,480,10);
    // body text
    fill(255, 247, 231);
    textFont(body);
    textSize(22);
    text("Truck art is a traditional art form in South Asia that consists of decorating trucks with vibrant colors, designs, and motifs. Learn more about the history of this unique practice by using the right arrow or D key to navigate this interactive timeline.",150, 280, 500);
    textFont(subheading);
    text("Press SPACE to start",width/2,420);
  } else if (screen == 2) {
    // timeline
    // the ground / road + background
    fill(166, 160, 154);
    rect(0,500,width,20);
    pattern2.resize(940,0);
    image(pattern2,-80,-50);
    
    // starting text
    textAlign(CENTER, CENTER);
    noStroke();
    fill(184, 135, 130);
    textFont(body);
    textSize(18);
    text("use the right arrow or 'D' key to start moving", startingTextX,280);
    if (trucks[0].moving == true) {
      startingTextX += 5;
    }
    
    // move the trucks
    // the index of the truck that moves depends on the truck in front of it
    for (let i = 0; i < trucks.length; i++) {
      if (i == 0) {
        trucks[0].display();
        trucks[0].move();
        trucks[0].showHistory();
      } else if (trucks[i-1].offScreen == true) {
        trucks[i].display();
        trucks[i].move();
        trucks[i].showHistory();
      }
    }
    
    // once the last truck is off screen, show the end screen
    if (trucks[trucks.length-1].offScreen == true) {
      ended = true;
      screen = 3;
    }
  } else if (screen == 3) {
    
      // ending screen
      // background
      pattern2.resize(940,0);
      image(pattern2,-80,-50);
      // text
      noStroke();
      textFont(heading);
      fill(133, 44, 34);
      textSize(30);
      text("You've reached the end!",width/2,40);
      textFont(body);
      fill(184, 135, 130);
      textSize(18);
      text("Truck art is more than decoration—it’s storytelling, history, and identity.",width/2,90);
      text("Thank you for taking this journey.", width/2,120);
      textFont(subheading);
      textSize(20);
      text("Press SPACE to restart",width/2,460);
      
      // draw images + squares
      let squareX = 24;
      let squareY = 177;
      for (let i = 0; i < 3; i++) {
        noFill();
        stroke(133, 44, 34);
        strokeWeight(5)
        square(squareX, squareY,237);
        endPics[i].resize(233,0);
        image(endPics[i],squareX+2,squareY+2);
        squareX += 257;
      }    
  }
}

function keyPressed() {
  if (screen == 1 && key === ' ') {
    screen = 2;
  } else if (screen == 3 && key == ' ') {
    // reset variables
    screen = 1;
    ended = false;
    startingTextX = 400;
    
    // reset trucks
    for (let i = 0; i < trucks.length; i++) {
      trucks[i].offScreen = false;
      trucks[i].x = -trucks[i].imgWidth;
    }
  }
}

class Trucks {
  constructor(truckImage, historyImage, imgWidth) {
    this.truckImage = truckImage;
    this.historyImage = historyImage;
    this.imgWidth = imgWidth;
    this.x = -this.imgWidth;
    this.y = 320;
    this.offScreen = false;
    this.moving = false;
  }
  
  display () {
    this.truckImage.resize(300,0);
    image(this.truckImage,this.x,this.y);
  }
  
  move () {
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
      if (this.x < width) {
        this.x += 5;
        this.offScreen = false;
        this.moving = true;
      } else {
        this.offScreen = true;
      }
    } else {
      this.moving = false;
    }
  }
  
  showHistory () {
    // once x+this.width reaches width/2 show the history card
    if ((this.x + this.imgWidth >= width/2) && this.offScreen == false)  {
      this.historyImage.resize(280,0);
      image(this.historyImage,270,20);
    }
  }
}


// sources


// history information:
// @freespiritrida on TikTok
// https://aaminasuleman.medium.com/truck-art-made-in-pakistan-b57fc9ee7099 
// https://en.wikipedia.org/wiki/Truck_art_in_South_Asia
// https://www.paradigmshift.com.pk/truck-art-in-pakistan/
// asked ChatGPT to give a brief timeline for pakistan truck art
// text at the end screen was also generated by ChatGPT

// images:
// end image 1: https://pin.it/7hbiBHOGK 
// end image 2: https://mymodernmet.com/pakistan-truck-art/ 
// end image 3: https://pin.it/2TgRyBDWA 
