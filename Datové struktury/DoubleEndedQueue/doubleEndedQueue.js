class DoubleEndedQueue {
    #size;
    #array;
    #frontPointer;
    #backPointer;
    #count;

    constructor(size) {
        this.#size = size;
        this.#array = new Array(size);
        this.#backPointer = 0;
        this.#frontPointer = size - 1;
        this.#count = 0;

    }

    pushBack(data) {
        if (this.#count === this.#size) return;
        this.#array[this.#backPointer++] = data;
        if (this.#backPointer === this.#size) this.#backPointer = 0;
        this.#count++;
    }

    pushFront(data) {
        if (this.#count === this.#size) return;
        this.#array[this.#frontPointer--] = data;
        if (this.#frontPointer < 0) this.#frontPointer = this.#size - 1;
        this.#count++;
    }

    popBack() {
        if (this.#count === 0) return null;
        this.#backPointer--;
        if (this.#backPointer < 0) this.#backPointer = this.#size = 1;
        this.#count--;
        return this.#array[this.#backPointer];
    }

    popFront() { 
        if (this.#count ===0) return null;
        this.#frontPointer++;
        if (this.#frontPointer === this.#size) this.#frontPointer = 0;
        this.#count--;
        return this.#array[this.#frontPointer];
    }
}