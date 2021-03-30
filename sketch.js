let num = 2000;
let range = 6; // controls how long each line is 
var song;
var button;
let ax = [];
let ay = [];
let ax2 = [];
let ay2 = [];
var lenl = 0
var ampV;
var col = {
  r: 255,
  g: 0,
  b: 0
};
function loaded() {
  button.html("PLAY")
}
function togglePlaying() {
  if (!song.isPlaying()){
    song.play()
    button.html("PAUSE")
    draw()
  } else {
    song.pause()
    button.html("PLAY")
  }
}
function setup() {
  createCanvas(1020, 600);
  song = loadSound("./fotw.mp3",loaded);
  button = createButton("Loading...");
  button.mousePressed(togglePlaying)
  for ( let i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
  frameRate(90);
  ampV = new p5.Amplitude(); //for visualizing
  // slider = createSlider(0, 255, 0);
  // slider.position(500, 800);
  // slider.style('width', '80px');
  // slideg = createSlider(0, 255, 0);
  // slideg.position(550, 830);
  // slideg.style('width', '80px');
  // slideb = createSlider(0, 255, 0);
  // slideb.position(600, 860);
  // slideb.style('width', '80px');
  
}
let angle = 0;
let r = 4;
function draw() {
  


  // Shift all elements 1 place to the left
  // for ( let i = 1; i < num; i++ ) {
  //   ax[i - 1] = ax[i];
  //   ay[i - 1] = ay[i];
  // }

  // // Put a new value at the end of the array
  var vol = ampV.getLevel()
  // // print(random(-range, range))
  // ax[num - 1] += random(-range*vol*6, range*vol*6);
  // ay[num - 1] += random(-range*vol*3, range*vol*3);

  // // Constrain all points to the screen
  // ax[num - 1] = constrain(ax[num - 1], 0, width);
  // ay[num - 1] = constrain(ay[num - 1], 0, height);

  // // Draw a line connecting the points
  // for ( let j = 1; j < num; j++ ) {
    
  //   let val = j / num * 204.0 + 51*vol  ;
  //   stroke(119,136,153);
  //   line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  // }
  
  // look up glass animal colors for visualizer
  
  translate(height/2); // translate to middle of screen
  col.r = random(0, 200);
  col.g = random(0, 250);
  col.b = random(100, 250);
  fill(col.r, col.g, col.b);
  stroke(col.r, col.g, col.b)
  line(lenl+5,700*vol,lenl,100*vol)
  line(lenl+5,-(700*vol)+600,lenl,-(100*vol)+600)
  // print(lenl+5,1000*vol,lenl,100*vol)
  translate(width/2,height/2);
  // colr = slider.value()
  // colg = slideg.value()
  // colb = slideb.value()
  fill(col.r, col.g, col.b);
  stroke(153,50,204);
  let x = r * cos(angle);
  let y = r/1.5 * sin(angle);
  ellipse(x,y,(20*vol)+.5,(20*vol)+.5);
  
  lenl += .11;
  angle += 0.1;
  r += 0.05;
}