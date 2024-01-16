class QuickSort{
    static sortAsc(array) {
        this.sortAsc.sortRecursive(array, 0, array.length - 1);
    }

    static sortRecursive(array, low, high) {
        if (low < high) {
            let pi = this.partitionLomuto(array, low, high);
            this.sortRecursive(array, low, pi - 1);
            this.sortRecursive(array, pi + 1, high);
        }

    }
    
    static partitionLomuto(array, low, high) {
        let pivot = array[high];
        let pi = low;
        for (let i = low; i < array.length; i++) {
            if (array[i] < pivot) {
                pi++;
                [array[i], array[pi]] = [array[pi], array[i]];
            }
        }
        pi++
        [array[high], array[pi]] = [array[pi], array[high]];
        return pi;
    }
}