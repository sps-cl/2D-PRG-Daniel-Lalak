let bubbleSortContainer = document.getElementById("bubblesort-div");
let insertionSortContainer = document.getElementById("insertionSort-div");
let shellSortContainer = document.getElementById("shellSort-div");
let quickSortContainer = document.getElementById("quickSort-div");
let mergeSortContainer = document.getElementById("mergeSort-div");
let countingSortContainer = document.getElementById("countingSort-div");
let max = 100;

document.documentElement.style.setProperty("--max-value", max);

let array = new Array(max);
let arrayOfColumns = new Array(array.length);
bubbleSortContainer.style.setProperty("--item-count", array.length);
insertionSortContainer.style.setProperty("--item-count", array.length);
shellSortContainer.style.setProperty("--item-count", array.length);
quickSortContainer.style.setProperty("--item-count", array.length);
mergeSortContainer.style.setProperty("--item-count", array.length);
countingSortContainer.style.setProperty("--item-count", array.length);
for (let i = 0; i < array.length; i++) {
    array[i] =Math.floor(Math.random() * max) + 1;
    
}
let bsa = new BubblesortAnim(array, bubbleSortContainer);
let isa = new InsertionSortAnim(array, insertionSortContainer);
let ssa = new ShellSortAnim(array, shellSortContainer);
let qsa = new QuickSortAnim(array, quickSortContainer);
let msa = new MergeSortAnim(array, mergeSortContainer);
let csa = new CountingSortAnim(array, countingSortContainer);

console.log(isa.sortAsc(), bsa.sortAsc(), ssa.sortAsc(), qsa.sortAsc(), msa.sortAsc());