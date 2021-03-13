function preload(){

};
function setup(){
canvas=createCanvas(250 ,250);
canvas.position(660,450)
video=createCapture(VIDEO);
video.hide();

};
function draw(){
image(video,0,0,250,250) ;
};
