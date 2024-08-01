//your parameter variables go here!
let pinkRectLength = 70;  //makes pink rect longer/shorter
let pinkRectX = 20 //changes where the rect start on the x axis
let pinkRectY = 70; //changes where the rect starts on the y axis
let purpleSquareS = 30 //changes the scale of the square
let blueRectLength = 70 // changes the length of blue rect
let circleS = 20 // changes the scale of the green circle
let middleTriStrokeWeight = 4 // changes the black stroke inside the middle triangle


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
   pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(229, 199, 255); //purple
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
//background
  strokeWeight(0)
  fill(240, 230, 252) //light purple

  //lines down
rect(20,0,1,200)
rect(40,0,1,200)
rect(60,0,1,200)
rect(80,0,1,200)
rect(100,0,1,200)
rect(120,0,1,200)
rect(140,0,1,200)
rect(160,0,1,200)
rect(180,0,1,200)
rect(200,0,1,200)

rect(10,0,1,200)
rect(30,0,1,200)
rect(50,0,1,200)
rect(70,0,1,200)
rect(90,0,1,200)
rect(110,0,1,200)
rect(130,0,1,200)
rect(150,0,1,200)
rect(170,0,1,200)
rect(190,0,1,200)

//lines across
rect(0,20,200,1)
rect(0,40,200,1)
rect(0,60,200,1)
rect(0,80,200,1)
rect(0,100,200,1)
rect(0,120,200,1)
rect(0,140,200,1)
rect(0,160,200,1)
rect(0,180,200,1)
rect(0,200,200,1)

rect(0,10,200,1)
rect(0,30,200,1)
rect(0,50,200,1)
rect(0,70,200,1)
rect(0,90,200,1)
rect(0,110,200,1)
rect(0,130,200,1)
rect(0,150,200,1)
rect(0,170,200,1)
rect(0,190,200,1)



  //shapes

//pinkrectangle

strokeWeight(0)
  fill(0,0,0) //black
  rect(pinkRectX - 3,pinkRectY -2, 10, pinkRectLength)
  fill(246, 148, 193) //pink
 rect(pinkRectX,pinkRectY, 10, pinkRectLength)


 
//circles
 fill(0,0,0)
 ellipse(97,48,circleS,circleS)
 fill(164, 252, 199) //green
ellipse(100,50,circleS,circleS)


fill(0,0,0)
ellipse(155,143,70,70)
  fill(255, 245, 153) //yellow
  ellipse(150,140,70,70)



  //littlecircles

  let littleCircles = true;

  if (littleCircles) {
  fill(165, 148, 249) //purple
  }
 else {
  fill(0,0,0)
 }
 ellipse(150,130,5,5)
 ellipse(135,140,5,5)
 ellipse(135,120,5,5)



//triangle
fill(0,0,0)
triangle(35,10,15,50,55,50)
fill(165, 148, 249) //purple
triangle(30,10,10,50,50,50)


//square
fill(0,0,0)
square(20,160,30)
fill(165, 148, 249) //purple
square(40,150, purpleSquareS)


//rectangle
fill(0,0,0) //black
rect(97,152, blueRectLength, 10)
fill(123, 223, 242) //blue
rect(100,150, blueRectLength, 10)


//cross
strokeWeight(5)
line (148,20,188,60)
line (188,20,148,60)
stroke(246, 148, 193) //pink
line (150,20,190,60)
line (190,20,150,60)


//middleTriangle

let middleTriangle = true;
if (middleTriangle) {
  stroke(0,0,0)
}
else
{
  stroke(164, 252, 199)
}

strokeWeight(middleTriStrokeWeight)
line (59,94,111,94)
line(59,94,85,123)
line(111,94,85,123)


//triangle outline

stroke(255, 245, 153) //yellow
strokeWeight(6)
line (50,90,120,90)
line (50,90,85,130)
line (120, 90, 85, 130)


}

