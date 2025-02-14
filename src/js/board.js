import {Tile} from "./tile.js";

export class Board {
    constructor(size = 4) {
        this.size = size;
        this.score = 0;
        this.reset();
    }

    createEmptyGrid() {
        return Array.from({length: this.size}, () => Array(this.size).fill(null));
    }

    reset() {
        this.grid = this.createEmptyGrid();
        this.score = 0;
        this.addRandomTile();
        this.addRandomTile();
        this.updateScore(0);
    }

    getEmptyCells() {
        return this.grid.reduce((acc, row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                if (!cell) acc.push({ row: rowIndex, col: colIndex });
            });
            return acc;
        }, []);
    }

    addRandomTile() {
        const emptyCells = this.getEmptyCells();
        if (emptyCells.length) {
            const {row, col} = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            this.grid[row][col] = new Tile([2, 4][+(Math.random() >= 0.9)], row, col);
        }
    }

    updateScore(points = 0) {
        this.score += points;
        this.renderScore();
    }

    renderScore() {
        const scoreElement = document.getElementById("score");
        if (scoreElement) {
            scoreElement.textContent = this.score;
        }
    }

    move(direction) {
        let moved = false;
        const isVertical = direction === "up" || direction === "down";
        let grid = isVertical ? this.transpose(this.grid) : this.grid;

        if (direction === "right" || direction === "down") grid = grid.map(row => row.reverse());

        let newGrid = grid.map(row => {
            let filtered = row.filter(tile => tile);
            let newRow = [];
            let points = 0;

            for (let i = 0; i < filtered.length; i++) {
                if (filtered[i + 1] && filtered[i].value === filtered[i + 1].value) {
                    let mergedTile = new Tile(filtered[i].value * 2, filtered[i].row, filtered[i].col);
                    newRow.push(mergedTile);
                    points += mergedTile.value;
                    i++;
                } else {
                    newRow.push(filtered[i]);
                }
            }

            while (newRow.length < this.size) newRow.push(null);
            if (points) this.updateScore(points);

            return newRow;
        });

        if (direction === "right" || direction === "down") newGrid = newGrid.map(row => row.reverse());
        if (isVertical) newGrid = this.transpose(newGrid);

        if (JSON.stringify(this.grid) !== JSON.stringify(newGrid)) {
            this.grid = newGrid;
            moved = true;
        }

        return moved;
    }

    transpose(grid) {
        return grid[0].map((_, i) => grid.map(row => row[i]));
    }

    has2048Tile() {
        return this.grid.some(row => row.some(tile => tile?.value === 2048));
    }

    canMove() {
        return this.getEmptyCells().length > 0 ||
            this.grid.some((row, i) =>
                row.some((tile, j) =>
                    tile &&
                    ((j < this.size - 1 && tile.value === this.grid[i][j + 1]?.value) ||
                        (i < this.size - 1 && tile.value === this.grid[i + 1][j]?.value))
                )
            );
    }
}
