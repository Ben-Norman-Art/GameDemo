'use strict'

let state = 'title';
let cnv;



function setup() {
  cnv = createCanvas(600, 600);
}

function draw() {

  if (state === 'title') {
    title();
    cnv.mouseClicked(titlemouseClicked);

  } else if (state === 'level 1') {
    level1();
    cnv.mouseClicked(level1MousedClicked); 
  }
}

function title() {
  background(100);
  textSize(80);
  stroke(0);
  text('MY GAME', 100, 100);


  textSize(30);
  text('Click anywhere to start', 100, 300);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
}

function level1MousedClicked(){
  console.log('canvas is clicked on level 1');
}
