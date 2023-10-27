var cols = 5;
var rows = 5;
var grid = new Array(cols);

function Spot(){
  this.f = 0;
  this.g = 0;
  this.h = 0;
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  console.log("A* Algorithm")
  // Making a 2D array
  for(var i =0;i<cols;i++){
    grid[i] = new Array(rows);
  }
  
  for(var a =0;i<cols;i++){
    for(var b =0;i<ros;i++){
    grid[i][j] = new Spot(); 
  }
  }
  
  console.log(grid);
}


function draw() {
  background(220);
}