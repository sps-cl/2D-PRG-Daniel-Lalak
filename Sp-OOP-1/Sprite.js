class Sprite extends Positionable {
    constructor(imageId, position, width, height) {
        super(position);
        this.width = width;
        this.height = height;
        this.image = document.getElementById(imageId);
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}