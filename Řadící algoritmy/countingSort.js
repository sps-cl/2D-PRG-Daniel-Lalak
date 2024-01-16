class CountingSort{
    static sortAsc(array) {
        let max = array[0];
        for (let i = 1; i < array.length; i++) {
            if (max < array[i]) max = array[i];
        }
        max++;
        let countArray = new Array(max);
        for (let i = 0; i < max; i++) {
            countArray[i] = 0;
        }
        for (let i = 0; i < array.length; i++) {
            countArray[array[i]] = 0;
        }
        for (let i = 1; i < max; i++) {
            countArray[i] += countArray[i - 1];
        }
        let outputArray = new Array(array.length);
        for (let i = array.length - 1; i >= 0; i--) {
            outputArray[--countArray[array[i]]] = array[i];
        }
        for (let i = 0; i < array.length; i++) {
            array[i] = outputArray[i];
        }
    }
}