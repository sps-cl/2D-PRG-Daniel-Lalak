let canvas = document.createElement("canvas");
let context = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 700;
document.body.appendChild(canvas);
let walkImage = new Image();
walkImage.src = 'playerWalkSpriteSheet.png';
let jumpImage = new Image();
jumpImage.src = 'playerJumpSpriteSheet.png'
let idleImage = new Image();
idleImage.src = 'playerIdleImage.png'
let walkAnimation;
let idleAnimation;
let jumpAnimation;
let frameInterval = 3;
let frame = 0;
let keysPressed = {};
let animationX =0
let animationY =600;
let eventImage = walkImage;
let jump = false;
let idle = true;
let walk = false
let nothingPressed = false;

walkImage.onload = function() {
    let frames = getFrames(walkImage,12)
    walkAnimation = new FrameAnimation(frames);
    walkAnimation.scale.x = 1;
    walkAnimation.scale.y = 1;
}
jumpImage.onload = function() {
    let frames = getFrames(jumpImage,3)
    jumpAnimation = new FrameAnimation(frames);
    jumpAnimation.scale.x = 1;
    jumpAnimation.scale.y = 1;
}
idleImage.onload = function() {
    let frames = getFrames(idleImage,1)
    idleAnimation = new FrameAnimation(frames);
    idleAnimation.scale.x = 1;
    idleAnimation.scale.y = 1;
    loop();
}
    if (x = canvas.width) {
        x = 0;
    }

function loop(){
    if(frame%frameInterval ===0){
    context.clearRect(0,0,canvas.width,canvas.height)
        if(walk == true){
            walkAnimation.draw(context,animationX,animationY,100,100);   
        }
        if(jump == true){
            jumpAnimation.draw(context,animationX,animationY,100,100);   
        } 
        if(idle == true){
           idleAnimation.draw(context,animationX,animationY,100,100) ; 
        }
         
    }
    frame ++ ;
    requestAnimationFrame(loop);
    if (keysPressed['a']) {
        walkAnimation.scale.x = -1;
        jumpAnimation.scale.x = -1;
        idleAnimation.scale.x = -1;
        animationX -= 5;
        jump = false;
        idle = false;
        walk = true;
    }
    if (keysPressed['d']) {
        walkAnimation.scale.x = +1;
        jumpAnimation.scale.x = +1;
        idleAnimation.scale.x = +1;
        animationX += 5;
        jump = false;
        idle = false;
        walk = true;
    }
    if (keysPressed[' ']){
        animationY -=5;
        jump = true;
        idle = false;
        walk = false;
    }
    if (nothingPressed == true) {
        if(animationY < 600){
        animationY += 3;                   
    }else animationY = 600;
    }
}

document.addEventListener('keydown', function (event) {
    keysPressed[event.key] = true;
    
});

document.addEventListener('keyup', function(event) {
    keysPressed[event.key] = false;
    if (!keysPressed['a'] && !keysPressed['d']) { 
        jump = false;
        idle = true;
        walk = false;
        nothingPressed = true;
    }
}); 

function getFrames(image,frameCount) {
    let linkedList = new LinkedList();
    let frameWidth = image.width /frameCount;
    let frameHeight = image.height;
    for (let i = 0; i < frameCount; i++) {
        let frame = new Frame(image, i * frameWidth, 0 ,frameWidth,frameHeight)
        linkedList.add(frame);
    }
    return linkedList;
}