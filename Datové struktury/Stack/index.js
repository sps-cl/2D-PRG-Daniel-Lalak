let stack = new Stack(10);
console.log("Načtené hodnoty");
    for(let i = 1; !stack.full(); i++) {
        console.log(i);
        stack.push(i);

}
console.log("Nenačtené hodnoty");
while(!stack.empty()) {
    console.log(stack.pop())
}