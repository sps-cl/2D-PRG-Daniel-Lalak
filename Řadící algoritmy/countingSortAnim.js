<<<<<<< HEAD
class CountingSortAnim extends SortAnim {
    async sortAsc() {
        let max = this.values[0];
        for (let i = 1; i < this.values.length; i++) {
            if (max < this.values[i]) max = this.values[i];
        }
        max++;
        let countArray = new Array(max);
        for (let i = 0; i < max; i++) {
            countArray[i] = 0;
        }
        for (let i = 0; i < this.values.length; i++) {
            countArray[this.values[i]]++;
        }
        for (let i = 1; i < max; i++) {
            countArray[i] += countArray[i - 1];
        }
        let outputArray = new Array(this.values.length);
        for (let i = this.values.length - 1; i >= 0; i--) {
            this.setCompareColor(this.columns[i]);
            await this.sleep(50);
            this.setDefaultColor(this.columns[i]);
            outputArray[--countArray[this.values[i]]] = this.values[i];
        }
        for (let i = 0; i < this.values.length; i++) {
            this.setValue(i, outputArray[i]);
            await this.sleep(50);
            this.setSortedColor(this.columns[i]);
        }
    }
=======
class CountingSortAnim extends SortAnim {
    async sortAsc() {
        let max = this.values[0];
        for (let i = 1; i < this.values.length; i++) {
            if (max < this.values[i]) max = this.values[i];
        }
        max++;
        let countArray = new Array(max);
        for (let i = 0; i < max; i++) {
            countArray[i] = 0;
        }
        for (let i = 0; i < this.values.length; i++) {
            countArray[this.values[i]]++;
        }
        for (let i = 1; i < max; i++) {
            countArray[i] += countArray[i - 1];
        }
        let outputArray = new Array(this.values.length);
        for (let i = this.values.length - 1; i >= 0; i--) {
            this.setCompareColor(this.columns[i]);
            await this.sleep(50);
            this.setDefaultColor(this.columns[i]);
            outputArray[--countArray[this.values[i]]] = this.values[i];
        }
        for (let i = 0; i < this.values.length; i++) {
            this.setValue(i, outputArray[i]);
            await this.sleep(50);
            this.setSortedColor(this.columns[i]);
        }
    }
>>>>>>> 0f245f2742ac6744dc3241d1519b8c5997a8fdc1
}