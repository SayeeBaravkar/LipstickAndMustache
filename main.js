lipsX = 0
lipsY = 0

mustacheX = 0
mustacheY = 0

function preload() {
    lips = loadImage('https://i.postimg.cc/ydhL9cZH/lipstick.png');
    mustache = loadImage('https://i.postimg.cc/mDWdt8hj/mustache.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            lipsX = results[0].pose.nose.x - 20
            lipsY = results[0].pose.nose.y - -5
            console.log("lips x = " + lipsX);
            console.log("lips y = " + lipsY);
            mustacheX = results[0].pose.nose.x - 20
            mustacheY = results[0].pose.nose.y - 10
            console.log("mustache x = " + mustacheX);
            console.log("mustache y = " + mustacheY);
        }
}

function draw() {
    image(video,0,0,300,300);
    image(lips, lipsX,lipsY,35, 35)
    image(mustache, mustacheX, mustacheY , 35, 35)
}

function take_snapshot(){
    save('FilterPicture.png');
}