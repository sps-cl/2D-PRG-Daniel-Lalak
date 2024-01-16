class SortAnim{
    constructor(values, container){
        this.values = new Array(values.length);
        for (let i = 0; i < values.length; i++) {
            this.values[i] = values[i];
            
        }
        this.columns = new Array(values.length);
        for (let  i = 0;  i < values.length;  i++) {
            let value = values[i];
            let column = document.createElement("div");
            column.style.setProperty("--x", i);
            column.style.setProperty("--value", value);
            column.className = "item";
            container.appendChild(column);
            this.columns[i] = column;
        }
    }
    
    setCompareColor(div){
        div.style.backgroundColor = "green"
    }
    setDefaultColor(div){
        div.style.backgroundColor = "white"
    }
    setSortedColor(div){
        div.style.backgroundColor = "yellow"
    }
    setValue(i, value) {
        this.values[i] = value
        this.columns[i].style.setProperty("--value", value);
    }
    swapValues(i, j){
        [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
        [this.columns[i], this.columns[j]] = [this.columns[j], this.columns[i]];
        this.columns[i].style.setProperty("--x", i);
        this.columns[j].style.setProperty("--x", j);
    }
    async sleep(time){
        let promise = new Promise(
            (resolve) => {
                setTimeout(()=>{
                    resolve();
                }, time);
            }
        )
        return promise;
    }
}