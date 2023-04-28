noseX=0;
noseY=0;
LeftwristX=0;
RightwristX=0;
difference=0;

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);
  


  canvas = createCanvas(550, 550);
  canvas.position(560, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
  noseX=results[0].pose.nose.x;
  noseY=results[0].pose.nose.y;
  LeftwristX=results[0].pose.leftWrist.x;
  RightwristX=results[0].pose.rightWrist.x;
  difference=floor(LeftwristX-RightwristX);
  }
}

function draw() {
  background('yellow');
  document.getElementById("square_side").innerHTML="font size of text = "+difference+"px";
textSize=(difference);
fill=("red");
text('Bidyansh',50,400);
}
