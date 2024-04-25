class BinaryHeap {
    constructor(size) {
        if (size instanceof Array) {
            this.items = size;
            this.count = this.items.length;
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].heapIndex = i;
            }
            this.heapify();
        } else {
            this.items = new Array(size);
            this.count = 0;
        }
    }
 
    sortDown(index) {
        let firstChildIndex = index * 2 + 1;
        let secondChildIndex = firstChildIndex + 1;
        while (firstChildIndex < this.count) {
            let swapIndex = firstChildIndex;
            if (secondChildIndex < this.count && this.items[firstChildIndex].compareTo(this.items[secondChildIndex]) > 0) {
                swapIndex = secondChildIndex;
            }
            if (this.items[index].compareTo(this.items[swapIndex]) > 0) {
                this.swap(index, swapIndex);
                index = swapIndex;
                firstChildIndex = index * 2 + 1;
                secondChildIndex = firstChildIndex + 1;
            } else {
                return;
            }
        }
    }
 
    sortUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.items[parentIndex].compareTo(this.items[index]) > 0) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else return;
        }
    }
 
    get() {
        if (this.count === 0) return;
        let item = this.items[0];
        this.items[0] = this.items[--this.count];
        this.items[0].heapIndex = 0;
        this.sortDown(0);
        return item;
    }
 
    add(item) {
        if (this.count === this.items.length) return;
        this.items[this.count] = item;
        item.heapIndex = this.count;
        this.sortUp(this.count);
        this.count++;
    }
 
    heapify() {
        for (let i = Math.floor(this.count / 2) - 1; i >= 0; i--) {
            this.sortDown(i);
        }
    }
 
    contains(item) {
        return this.items[item.heapIndex] === item;
    }
 
    swap(index1, index2) {
        let tmpIndex = this.items[index1].heapIndex;
        this.items[index1].heapIndex = this.items[index2].heapIndex;
        this.items[index2].heapIndex = tmpIndex;
        [this.items[index1], this.items[index2]] = [this.items[index2], this.items[index1]];
    }
} 