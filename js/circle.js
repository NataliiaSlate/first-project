class Circle extends Shape {
    constructor(x, y, size, stepsX, stepsY) {
        super(x, y, size, stepsX, stepsY);
        this.stepsX = 0;
        this.stepsY = random(-7, 7);
    }

    draw() {
        this.fillColor();
        this.move();
        circle(this.x, this.y, this.size);
    }
}
