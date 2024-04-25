class Cell {
    constructor(data) {
        this.data = data;
        this.heapIndex = 0;
    }

    compareTo(other) {
        if (this.data < other.data) return -1;
        if (this.data > other.data) return 1;
        return 0;
    }
}