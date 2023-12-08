class SortAnim {
    constructor(values, container) {
        this.values = new Array(values.length);
        container.style.setProperty("--item-count", values.length);
        for (let i = 0; i < values.length; i++) {
            this.values[i] = values[i];
            
        }
        
    }
    
    setCompareColor(div) {
    div.style.backgroundColor = "green";
    }
    
    setDefaultColor(div) {
    div.style.backgroundColor = "white";
    }

    setSortColor(div) {
    div.style.backgroundColor = "yellow";
    }

    async sleep(time) {
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