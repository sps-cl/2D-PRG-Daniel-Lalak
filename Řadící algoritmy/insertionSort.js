class InsertionSort{
    static sortAsc(array) {
        for (let i = 1; i < array.length; i++) {
            let j = i - 1;
            while(j >= 0 && array[j] > array[j + 1]) {
                let j = i - 1;
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                j--;
                
            }
        }
    }
}