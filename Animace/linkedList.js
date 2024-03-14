class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class LinkedList {
    #head;
    #tail;
    #count;

    *[Symbol.iterator]() {
        let node = this.#head;
        while (node != null) {
            yield node.data;
            node = node.right;

        }
            
        
    }

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    add(data) {
        if (!(data instanceof Node)) {
            data = new Node(data);
        }    
        if (this.#count === 0) {
            this.#head = data;
            this.#tail = data;
            this.#count++;
            return;  
        }
        this.#tail.right = data;
        data.left = this.#tail;
        this.#tail = data;
        this.#count++;
    }

    remove(node) {
        if (!(node instanceof Node)) {
            node = this.getByData(node);
        }
        if (node != null) {
            if (this.#count === 1) {
                this.#count = 0;
                this.#head = null;
                this.#tail = null;
                return;
            }
            if (node === this.#head) {
                let right = this.#head.right;
                right.left = this.#head.left;
                if (right.left != null) {
                    right.left.right = right;
                }
                this.#head = right;
            } else if (node === this.#tail) {
                let left = this.#tail.left;
                left.right = this.#tail.right;
                if (left.right != null) {
                    left.right.left = left;
                }
                this.#tail = left;
            } else {
                node.right.left = node.left;
                node.left.right = node.right;
            }
            node.left = null;
            node.right = null;
            this.#count--;
        }
    }

    getByData(data) {
        let node = this.#head;
        for (let i = 0; i < this.#count; i++) {
            if (node.data === data) {
                return node;
            }
            node = node.right;
        }
        return null;
    }

    get(index) {
        if (index < this.#count) {
            let i = 0;
            let node = this.#head;
            while(i < index) {
                i++;
                node = node.right;
            }
            return node;
        }
        return null;
    }

    getIterator() {
        return this[Symbol.iterator]();
    }

    circle() {
        if (this.#count === 0) return;
        this.#head.left = this.#tail;
        this.#tail.right = this.#head;
    }

}