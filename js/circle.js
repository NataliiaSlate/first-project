class Circle extends Shape {
    constructor(x, y, size, stepsX, stepsY) {
        super(x, y, size, stepsX, stepsY);
        this.stepsX = 0;
        this.stepsY = round(random(-7, 7));
    }

    draw() {
        super.draw();
        circle(this.x, this.y, this.size);
    }
}
