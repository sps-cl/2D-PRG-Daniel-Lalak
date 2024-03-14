const canvas = document.getElementById("canvas");
let context =canvas.getContext("2d");
context.lineCap = "round"
let shape = "line";
let draw = false;
let X;
let Y;
let currentImage = createCanvasCopy();

let undo = new DoubleEndedQueue(100);
let redo = new DoubleEndedQueue(100);

window.addEventListener("keydown", (event) =>{
    if (event.key === "Control") {
        control = true;
    } else {
        if (control){
            if (event.key.toLowerCase() ==="z") {
                if (undo.empty) return;
                redo.pushBack(currentImage);
                currentImage = undo.popBack();
                context.clearRect(0,0,canvas.width,canvas.height)
                context.drawImage(currentImage,0,0)
                
                console.log("Control + Z");
            }else if (event.key.toLocaleLowerCase() === "y") {
                if (redo.empty) return;
                undo.pushBack(currentImage);
                currentImage = redo.popBack();
                context.clearRect(0,0,canvas.width,canvas.height)
                context.drawImage(currentImage,0,0)
                
                console.log("Control + Y");
            }
        }
    }
});

window.addEventListener("keyup", (event) =>{
    if (event.key === "Control") {
        control = false;
    }
});

canvas.addEventListener(
    "mousemove",(event) => {
        let rect = canvas.getBoundingClientRect();
        let x  = event.clientX - rect.x;
        let y  = event.clientY - rect.y;
        if(draw){
            switch(shape){
                    
                case "rect":
                    context.clearRect(0,0,canvas.width,canvas.height)
                    context.drawImage(currentImage,0,0)
                    context.fillRect(X,Y,x - X, y - Y)
                    context.strokeRect(X,Y,x-X,y-Y)
                    
                break;
                case "circle":
                    context.clearRect(0,0,canvas.width,canvas.height)
                    context.drawImage(currentImage,0,0)
                    context.beginPath();
                    context.arc(X,Y,Math.sqrt((x-X)**2 + (y-Y)**2),0,Math.PI * 2);
                    context.fill();
                    context.stroke();

                break
                case "line":
                    context.beginPath();
                    context.moveTo(X,Y);
                    context.lineTo(x,y)
                    context.stroke();
                    X=x;
                    Y=y;
                break;
            }
        }
    }
)

canvas.addEventListener(
    "mousedown", (event) => {
        draw = true;
        rect = canvas.getBoundingClientRect();
        X = event.clientX - rect.x;
        Y = event.clientY - rect.y;
        if(undo.full) undo.popFront();
        undo.pushBack(currentImage);
        redo.clear;
    })

canvas.addEventListener(
    "mouseup", (event) => {
        draw = false;
        currentImage = createCanvasCopy();
    }
)

function drawRectangle(){
    shape = "rect"
}

function drawCircle(){
    shape = "circle";
}

function drawLine() {
    shape = "line";
}

function setStrokeColor(color){
    context.strokeStyle = color;
}

function setFillColor(color){
    context.fillStyle = color;
}

function setStrokeWidth(width){
    context.lineWidth(width)
}


function createCanvasCopy(){
    let newCanvas = document.createElement("canvas");
    newCanvas.width = canvas.width;
    newCanvas.height = canvas.height;
    let context = newCanvas.getContext("2d");
    context.drawImage(canvas,0,0)
    return newCanvas;
}