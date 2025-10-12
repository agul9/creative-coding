let collage; // background image
let engFont; 
let imgAlpha = 255;
let urduWords = [

// poem translation:
// will the women before me
// recognize me as their own
// or will I be as foreign
// as the words on my tongue
  
// kia
{text:'کیا',x:370,y:55,width:44,height:39,clicked:false,alpha:0,translation:'would'},

//guzri
{text:'گزری',x:270,y:55,width:79,height:45,clicked:false,alpha:0,translation:'gone'},

// hoi
{text:'ہوئی',x:200,y:55,width:59,height:35,clicked:false,alpha:0,translation:'have'},

// aurat
{text:'عورت',x:105,y:60,width:82,height:36,clicked:false,alpha:0,translation:'women'},
  
// mujhey
{text:'مجھے',x:320,y:100,width:84,height:28,clicked:false,alpha:0,translation:'my'},
  
// apna
{text:'اپنا',x:275,y:105,width:43,height:40,clicked:false,alpha:0,translation:'own'},
  
// lahoo
{text:'لہو',x:220,y:105,width:45,height:41,clicked:false,alpha:0,translation:'blood'},
  
// jaanengi
{text:'جانے گی',x:85,y:105,width:120,height:48,clicked:false,alpha:0,translation:'recognize me'},
  
// ya
{text:'یا',x:385,y:190,width:23,height:40,clicked:false,alpha:0,translation:'or'},
  
// faqt
{text:'فقط',x:330,y:190,width:43,height:43,clicked:false,alpha:0,translation:'just'},
  
// ajnabi
{text:'اجنبی',x:250,y:190,width:70,height:42,clicked:false,alpha:0,translation:'foreign'},
  
// jaisey
{text:'جیسے',x:320,y:230,width:82,height:30,clicked:false,alpha:0,translation:'like'},
  
// meri
{text:'میری',x:235,y:235,width:70,height:30,clicked:false,alpha:0,translation:'my'},
  
// zabaan
{text:'زباں',x:160,y:235,width:58,height:40,clicked:false,alpha:0,translation:'tongue'},
  
// par
{text:'پر',x:370,y:285,width:28,height:31,clicked:false,alpha:0,translation:'on'},
  
// alfaaz
{text:'الفاظ',x:305,y:290,width:56,height:43,clicked:false,alpha:0,translation:'words'}
  
]

function setup() {
  createCanvas(435, 563);
  collage = loadImage("assets/collage2.jpg");
  engFont = loadFont("assets/VarelaRound-Regular.ttf");
}

function draw() {
  background(0);
  collage.resize(440,0);
  tint(255,imgAlpha);
  image(collage,0,0);
  
  drawPoem();
}

// show the word if its clicked + randomly show/hide others
function mouseClicked() {
  for (let i = 0; i < urduWords.length; i++) {
    if (mouseX > urduWords[i].x && mouseX < urduWords[i].x + urduWords[i].width && mouseY > urduWords[i].y - urduWords[i].height && mouseY < urduWords[i].y) {
      assignRandClicks();
      urduWords[i].clicked = true;
      urduWords[i].alpha = 0;
      setImgAlpha();
    }
  }
}

function drawPoem() {
  // loop through the urdu array
  // if its not clicked, draw the word. if it is, draw the fading rect.
  for (let i = 0; i < urduWords.length; i++) {
    if (urduWords[i].clicked == true) {
      fill(217, 207, 197,urduWords[i].alpha);
      noStroke();
      textSize(14);
      rect(urduWords[i].x,urduWords[i].y - urduWords[i].height,urduWords[i].width,urduWords[i].height);
      if (urduWords[i].alpha < 255) {
        urduWords[i].alpha += 5;
      }
      fill(0);
      textFont(engFont);
      textAlign(CENTER,CENTER);
      text(urduWords[i].translation,(urduWords[i].x+urduWords[i].x+urduWords[i].width)/2,(urduWords[i].y+(urduWords[i].y-urduWords[i].height))/2);
    } else {
      textSize(40);
      textFont("sans-serif");
      fill(217, 207, 197);
      textAlign(LEFT,BOTTOM);
      text(urduWords[i].text,urduWords[i].x,urduWords[i].y);
    }
  }
}

// after clicking a word, it randomly shows/hides other words
function assignRandClicks() {
  for(let i =0; i < urduWords.length; i++) {
    if(random(50) < 25) {
      urduWords[i].clicked = true;
      urduWords[i].alpha = 0;
    } else {
      urduWords[i].clicked = false;
    }
  }
}

// the background image's transparency is based on the number of words shown
function setImgAlpha() {
  let clickedCount = 0;
  for(let i = 0; i < urduWords.length; i++) {
    if (urduWords[i].clicked == true) {
      clickedCount++;
    }
  }
  imgAlpha = map(clickedCount, 0, urduWords.length, 255, 0);
}


// collage images used from:
// background: https://pin.it/gx8xrMYZA
// pink flowers: https://pin.it/6SN5QQagV
// white flowers: https://pin.it/33IG5V5LR
// bangles + newspaper: https://pin.it/1P4fFX6CN
// hands + jewlery: https://pin.it/1atXzsvOj
// chai: https://pin.it/7DBeZg36o