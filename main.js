noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWrist=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150)
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("Pose Net Is Initialized");
}

function gotPoses(results) {
    if(results.length>0)
    {
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}

function draw() {
    background("#F1948A");
    document.getElementById("sqaure_side").innerHTML="Width and Height of a Sqaure will Be="+difference+"px";
    fill("#C39BD3");
    stroke("#AF7AC5");
    square(noseX,noseY,difference);
}