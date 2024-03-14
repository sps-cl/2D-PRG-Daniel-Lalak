class Frame {
    constructor(image, sx, sy, sw, sh) {
        this.image = image;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
    }
    draw(context, x, y, width, height) {
        context.drawImage (this.image, this.sx, this.sy, this.sw, this.sh, x, y, width, height);
    }
}