export class Renderer {
    constructor(canvas, board) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.board = board;
        this.tileSize = canvas.width / board.size;
    }

    render() {
        this.clearCanvas();
        this.drawGrid();
        this.drawTiles();
    }

    clearCanvas() {
        this.ctx.fillStyle = "#bbada0";
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawGrid() {
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawTiles() {
        this.board.grid.forEach((row, rIndex) => {
            row.forEach((tile, cIndex) => {
                if (tile) {
                    tile.updatePosition();
                    this.drawTile(tile.value, rIndex, cIndex);
                }
            });
        });
    }

    drawTile(value, row, col) {
        const colors = {
            2: "#eee4da", 4: "#ede0c8", 8: "#f2b179", 16: "#f59563",
            32: "#f67c5f", 64: "#f65e3b", 128: "#edcf72", 256: "#edcc61",
            512: "#edc850", 1024: "#edc53f", 2048: "#edc22e",
        };

        const padding = 10;
        const radius = 10;
        const size = this.tileSize - padding;
        const x = col * this.tileSize + padding / 2;
        const y = row * this.tileSize + padding / 2;

        this.ctx.fillStyle = colors[value] || "#3c3a32";

        this.ctx.beginPath();
        this.ctx.moveTo(x + radius, y);
        this.ctx.arcTo(x + size, y, x + size, y + size, radius);
        this.ctx.arcTo(x + size, y + size, x, y + size, radius);
        this.ctx.arcTo(x, y + size, x, y, radius);
        this.ctx.arcTo(x, y, x + size, y, radius);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.fillStyle = value > 4 ? "#f9f6f2" : "#776e65";
        this.ctx.font = "bold 32px Arial";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(value, x + size / 2, y + size / 2);
    }
}
