class Cell {
    constructor(x, y) {
        this.x = x;             //pozice x v mapě
        this.y = y;             //pozice y v mapě
        this.wall = false;      //zdda je buňka přístupná pro hledání trasy
        this.startDistance = 0; // vzdálenost od počátku trasy
        this.endDistance = 0;   // vzdálenost od konce trasy
        this.heapindex = 0;     // index buňky v binární haldě
        this.next = null;       // atribut pro propojení buňek do spojového seznamu - abychom dokázali rekonstruovat vypočtěnou trasu
    }

    get distance() {  //getter vracející celkovou vzdálenost buňky
        return this.startDistance + this.endDistance;
    }

    compareTo(other) {  //metoda pro porovnání buněk mezi sebou -- other je instancí třídy cell
        if (this.distance < other.distance) return -1;
        if (this.distance > other.distance) return 1;
        if (this.startDistance < other.startDistance) return -1;
        if (this.startDistance > other.startDistance) return 1;
        return 0;
    }
}