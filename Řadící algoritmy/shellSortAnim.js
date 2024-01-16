class ShellSortAnim extends SortAnim{
    constructor(values, container){
        super(values, container)
    }
    async sortAsc(){
        for (let gap = this.values.length >> 1; gap > 0; gap >>= 1) {
            for (var i = gap; i < this.values.length; i++) {
                let j = i - gap;
                while(j >= 0 && this.values[j] > this.values[j + gap]) {
                    this.setCompareColor(this.columns[j]);
                    this.setCompareColor(this.columns[j + gap]);
                    await this.sleep(5)
                    this.setDefaultColor(this.columns[j + gap]); 
                    this.setDefaultColor(this.columns[j]);
                    this.swapValues(j, j+gap);
                    j -= gap;
                }
                await this.sleep(100);
            }
        }
        for (let index = 0; index < i; index++) {
            this.setSortedColor(this.columns[index])
            
        }
    }
}