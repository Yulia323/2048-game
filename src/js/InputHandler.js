export class InputHandler {
    constructor(handleMove) {
        this.handleMove = handleMove;
        this.swipeThreshold = 30;
        this.startX = 0;
        this.startY = 0;

        document.addEventListener("keydown", (event) => this.handleKey(event));

        document.addEventListener("touchstart", (event) => this.handleTouchStart(event));
        document.addEventListener("touchend", (event) => this.handleTouchEnd(event));

        document.addEventListener("mousedown", (event) => this.handleMouseStart(event));
        document.addEventListener("mouseup", (event) => this.handleMouseEnd(event));
    }

    handleKey(event) {
        const validKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
        if (!validKeys.includes(event.key)) return;

        event.preventDefault();
        this.handleMove(event.key.replace("Arrow", "").toLowerCase  ());
    }

    handleTouchStart(event) {
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
    }

    handleTouchEnd(event) {
        let touch = event.changedTouches[0];
        this.detectSwipe(touch.clientX, touch.clientY);
    }

    handleMouseStart(event) {
        this.startX = event.clientX;
        this.startY = event.clientY;
    }

    handleMouseEnd(event) {
        this.detectSwipe(event.clientX, event.clientY);
    }

    detectSwipe(endX, endY) {
        let dx = endX - this.startX;
        let dy = endY - this.startY;

        if (Math.abs(dx) < this.swipeThreshold && Math.abs(dy) < this.swipeThreshold) return;

        if (Math.abs(dx) > Math.abs(dy)) {
            this.handleMove(dx > 0 ? "right" : "left");
        } else {
            this.handleMove(dy > 0 ? "down" : "up");
        }
    }
}
