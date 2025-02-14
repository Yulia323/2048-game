export class Tile {
    constructor(value, row, col) {
        this.value = value;
        this.row = row;
        this.col = col;
        this.x = col;
        this.y = row;
    }

    updatePosition(delta = 0.1) {
        this.x += (this.col - this.x) * delta;
        this.y += (this.row - this.y) * delta;
    }
}
