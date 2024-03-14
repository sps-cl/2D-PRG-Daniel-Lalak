class FrameAnimation {
    constructor(frames) {
        frames.circle();
        this.frames = frames;
        this.frameIterator = frames.getIterator();
        this.scale = {x: 1, y: 1};
    }

    draw(context, x, y, width, height) {
        context.translate((1 - this.scale.x) * ((width) / 2 + x), (1 - this.scale.y) * ((height ) / 2 + y));
        context.scale(this.scale.x, this.scale.y);
        this.frameIterator.next().value.draw(context, x, y, width, height);
        context.resetTransform();
    }
}