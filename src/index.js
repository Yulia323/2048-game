import {Game} from "./js/game.js";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas");
    if (canvas) {
        new Game(canvas);
    }
});
