var cols = 5;
var rows = 5;
var grid = new Array(cols);

var openList = [];
var closedList = [];

var start;
var end;
class Spot {
  constructor() {
    this.f = 0;
    this.g = 0;
    this.h = 0;

  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  console.log("A* Algorithm")
  // Making a 2D array
  for(var i =0;i<cols;i++){
    grid[i] = new Array(rows);
  }
  
  for(var a =0;i<cols;i++){
    for(var b =0;i<rows;i++){
      grid[i][j] = new Spot(); 
    }
  }
  start = grid[0][0];
  end = grid[cols-1][rows-1];
  console.log(grid);
}


function draw() {
  background(220);
}