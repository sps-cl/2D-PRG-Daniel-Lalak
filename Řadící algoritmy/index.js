let bubbleSortContainer = document.getElementById("bubbleSort-div");
let insertionSortContainer = document.getElementById("insertionSort-div");
let max = 30;
document.documentElement.style.setProperty("--max-value", max);
let array = new Array(max);
let arrayOfColumns = new Array (array.length);
bubbleSortContainer.style.setProperty("--item-count", array.length);

for (let i = 0; i < array.length; i++) {
    array[i] = Math.round(Math.random() * max) + 1;
}

for (let i = 0; i < array.length; i++) {
    let value = array[i];
    let column = document.createElement("div");
    column.style.setProperty("--x", i);
    column.style.setProperty("--value", value);
    column.className = "item";  
    bubbleSortContainer.appendChild(column);
    arrayOfColumns[i] = column;
}

async function sleep(time) {
    let promise = new Promise(
        (resolve) => {
            setTimeout(()=>{
                resolve();
            }, time);
       }
    )
    return promise;
}

function swapValues(i, j) {
    [array[i], array[j]] = [array[j], array[i]];
    [arrayOfColumns[i], arrayOfColumns[j]] = [arrayOfColumns[j], arrayOfColumns[i]];
    arrayOfColumns[i].style.setProperty("--x", i);
    arrayOfColumns[j].style.setProperty("--x", j);
}

function setCompareColor(div) {
    div.style.backgroundColor = "green";
}

function setDefaultColor(div) {
    div.style.backgroundColor = "white";
}

function setSortColor(div) {
    div.style.backgroundColor = "yellow";
}