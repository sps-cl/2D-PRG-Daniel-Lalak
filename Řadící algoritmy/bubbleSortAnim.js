class BubbleSortAnim extends SortAnim {
    static sortAsc() {
        async function sortAsc() {
            for (let i = 0; i < this.values.length; i++) {
                let swap = false;
                let bound = this.values.length - i;
                for (let j = 1; j < bound; j++) {
                    setCompareColor(this.Columns[j - 1]);
                    setCompareColor(this.Columns[j]);
                    await sleep(300);
                    setDefaultColor(this.Columns[j - 1]);
                    setDefaultColor(this.Columns[j]);
                    if (this.values[j - 1] > this.values[j]) {
                        swap = true;
                        swapValues(j - 1, j);
                    }
                    
                }
                this.columns = new Array(values.length)
        for (let i = 0; i < values.length; i++) {
            let value = array[i];
            let column = document.createElement("div");
            column.style.setProperty("--x", i);
            column.style.setProperty("--value", value);
            column.className = "item";  
            container.appendChild(column);
            this.columns[i] = column;
        }
                setSortColor(this.Columns[bound - 1]);
                if (!swap) return;
            }
        }
    }
}