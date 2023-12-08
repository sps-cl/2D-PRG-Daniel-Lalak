class BubbleSort {
            static sortAsc(array) {
                for (let i = 0; i < array.length; i++) {
                    let swap = false;
                    for (let j = 1; j < array.length; j++) {
                        if (array[j - 1] > array[j]) {
                            swap = true;
                            [array[j - 1], array[j]] = [array[j], array[j - 1]];
                        }
                        
                    }
                    if (!swap) return;
                }
            }
            swapValues(i, j) {
                [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
                [this.columns[i], this.columns[j]] = [this.columns[j], this.columns[i]];
                this.columns[i].style.setProperty("--x", i);
                this.columns[j].style.setProperty("--x", j);
    }
}
        