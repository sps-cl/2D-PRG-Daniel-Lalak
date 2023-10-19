class GameObject extends Positionable {
    constructor(position) {
        this.speed =  new Vector(0, 0);
        this.minBounds = new Vector(-Infinity, -Infinity);
        this.maxBounds = new Vector(Infinity, Infinity);
    }
    move() {
        this.position.add(this.speed);
    }

    draw(context) {
        this.sprite.draw(context);
    }

    collideWith(other) {
        return this.collider.collideWith(other.collider);
    }
}