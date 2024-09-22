class MessageDisplay {
    constructor(x = width / 2, y = height / 2) {
        this.x = x;
        this.y = y;
    }

    updateMessage(newMessage) {
        this.message = newMessage;
        this.showMessage = true;
    }

    draw() {
        if (this.showMessage) {
            fill(0);
            textSize(24);
            textAlign(CENTER, CENTER)
            text(this.message, this.x, this.y);
        }
    }
}
