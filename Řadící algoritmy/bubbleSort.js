class BubbleSort{
    static sortAsc(array){
        for (let i = 0; i < array.length; i++) {
            let swap = false;
            for (let j = 1; j < array.length - i; j++) {
                if (array[j -1] > array[j]){
                    swap = true;
                    [array[j - 1], array[j]] = [array[j], array[j -1]];
                }
            }
            if(!swap) return

        }
    }
}