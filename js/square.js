class Square extends Shape {
    constructor(x, y, size, stepsX, stepsY) {
        super(x, y, size, stepsX, stepsY);
        this.stepsX = random(-2, 2);
        this.stepsY = 0;
        this.size = random(5, 100);
    }

    draw() {
        this.fillColor();
        this.move();
        square(this.x - this.size / 2, this.y - this.size / 2, this.size);
    }
}
