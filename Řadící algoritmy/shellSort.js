class InsertionSort{
    static sortAsc(array) {
        for (let gap = array.length >> 1; gap > 0; gap >>= 1) {
            const element = array[gap];
            for (let i = gap; i < array.length; i++) {
                let j = i - gap;
                while(j >= 0 && array[j] > array[j + gap]) {
                    let j = i - gap;
                    [array[j], array[j + gap]] = [array[j + gap], array[j]];
                    j -= gap;
                    
                }
            }
        }
    }
}
