class Player extends GameObject {
    constructor(position, size) {
        super(position);
        this.standingSprite = new Sprite("player_standing", position, size, size);
        this.crouchingSprite = new Sprite("player_crouching", position, size * 1.1, size * 0.75);
        this.sprite = this.standingSprite;
        this.standingCollider = CircleCollider(position, size / 2);
        this.crouchingCollider = new RectCollider( position, size * 1.1, size * 0.75);
        this.collider = this.standingCollider;
        this.crouching = false;
        this.grounded = false;
    }

    jump() {
        if (this.grounded = true) {
            this.speed.y = -14;
        }
    }

    getUp() {
        if (this.crouching = true) {
            this.collider = this.standingCollider;
            this.sprite = this.standingSprite;
            this.crouching = false;
        }
    }

    crouch() {
        if (this.crouching = true) {
            this.crouching = true;
            this.collider = this.crouchingCollider;
            this.sprite = this.crouchingSprite;
            this.y + this.standingCollider.bottomEdge - this.crouchingCollider.bottomEdge;
        }
    }

    move() {
        this.speed.y + 0.3;
        super.move;
        if (this.collider.bottomEdge > this.maxBounds.y) {
            this.collider.bottomEdge = this.maxBounds.y;
            this.speed.y = 0;
            this.grounded = true;
        }else {
            this.grounded = false;
        }
        
    }
}