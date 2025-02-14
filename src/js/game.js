import {Board} from "./board.js";
import {Renderer} from "./renderer.js";
import {InputHandler} from "./InputHandler.js";

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.board = new Board(4);
        this.renderer = new Renderer(canvas, this.board);
        this.inputHandler = new InputHandler(this.handleMove.bind(this));
        this.isMoving = false;
        this.startGame();
    }

    startGame() {
        this.board.reset();
        this.renderer.render();
    }

    handleMove(direction) {
        if (this.isMoving) return;
        this.isMoving = true;

        const moved = this.board.move(direction);
        if (moved) {
            this.board.addRandomTile();
            this.renderer.render();

            if (this.board.has2048Tile()) {
                alert("Уровень пройден");
                this.startGame();
            } else if (!this.board.canMove()) {
                alert("Нельзя сделать ход");
                this.startGame();
            }
        }

        this.isMoving = false;
    }
}