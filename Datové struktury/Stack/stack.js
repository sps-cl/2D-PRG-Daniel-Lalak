class Stack{
    #size;
    #array;
    #stackPointer;
    constructor(size) {
        this.#size = size;
        this.#array = new Array(size);
        this.#stackPointer = 0;
    }

    push(data) {
        if (this.#stackPointer >= this.#size) return;
        this.#array[this.#stackPointer++] = data; 
    }

    pop() {
        if (this.#stackPointer===0) return null;
        return this.#array[--this.#stackPointer];
    }

    empty() {
        return this.#stackPointer ===0;
    }

    full() {
        return this.#stackPointer >= this.#size;
    }
}