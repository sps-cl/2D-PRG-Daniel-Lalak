let canvas = document.createElement('canvas');
let context = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 700;
document.body.appendChild(canvas);
this.frameInterval = 3;
this.frame = 0;
let walkImage = new Image();
let walkAnimation;
let jumpImage = new Image();
let jumpAnimation;
let idleImage = new Image();
let idleAnimation;
walkImage.src = 'playerWalkSpriteSheet.png';
jumpImage.src = 'playerJumpSpriteSheet.png';
idleImage.src = 'playerIdleImage.png';
let keysPressed = [];

window.addEventListener('keydown', (event) => {
    keys[event.key.toLowerCase()] = true;
});
window.addEventListener('keyup', (event) => {
    keys[event.key.toLowerCase()] = false;
});

walkImage.onload = function() {
    let frames = getFrames(walkImage, 12);
        walkAnimation = new FrameAnimation(frames);
        walkAnimation.scale.x = 1;
        walkAnimation.scale.y = 1;
        loop();
};

jumpImage.onload = function () {
    let frames = getFrames(jumpImage, 3);
    jumpAnimation = new FrameAnimation(frames);
    jumpAnimation.scale.x = 1;
    jumpAnimation.scale.y = 1;
};

idleImage.onload = function () {
    let frames = getFrames(idleImage, 1);
    idleAnimation = new FrameAnimation(frames);
    idleAnimation.scale.x = 1;
    idleAnimation.scale.y = 1;
};

let x = 0;
let y = 100;
function loop() {
    if (frame % this.frameInterval === 0) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        walkAnimation.draw(context, x, y, 100, 100);
    }

    frame++;
    requestAnimationFrame(loop);
    if (keyPressed = ['d']) {
        x += 1;
    }
}
frame++;

function getFrames(image, frameCount) {
    let linkedList = new LinkedList();
    let frameWidth = image.width / frameCount;
    let frameHeight = image.height;
    for (let i = 0; i < frameCount; i++) {
        let frame = new Frame(image, i * frameWidth, 0, frameWidth, frameHeight);
        linkedList.add(frame);
    }
    return linkedList;
}