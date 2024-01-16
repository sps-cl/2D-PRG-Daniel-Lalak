class QuickSortAnim extends SortAnim {
    constructor(values, container) {
        super(values,container)
    }
    async sortAsc() {
        this.sortRecursive(0, this.values.length - 1);
    }

    async sortRecursive(low, high) {
        if (low < high){
            let pi = await this.partitionLomuto(low, high);
            await this.sortRecursive(low, pi - 1);
            await this.sortRecursive(pi + 1, high);
        }
        else if (low === high){
            this.setSortedColor(this.columns[low])
        }   
    }

    async partitionLomuto(low, high) {
        let pivot = this.values[high];
        let pi = low - 1;
        for (let i = low; i < high; i++) {
           if (this.values[i] < pivot) {
                pi++;
                this.setCompareColor(this.columns[high]);
                this.setCompareColor(this.columns[low]);
                await this.sleep(50);
                this.setDefaultColor(this.columns[high]);
                this.setDefaultColor(this.columns[low]);
                this.swapValues(i, pi);
           }
        }
        pi++;

        this.swapValues(high, pi);
        this.setSortedColor(this.columns[pi])
        return pi;
    }

}