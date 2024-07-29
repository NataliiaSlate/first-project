class Triangle extends Shape {
    constructor(x, y, size) {
        const step = random(-2, 2);
        super(x, y, size, step, step);
    }

    draw() {
        const height = (Math.sqrt(3) / 2) * this.size;

        super.draw();
        triangle(
            this.x,
            this.y - (2 / 3) * height,
            this.x - this.size / 2,
            this.y + (1 / 3) * height,
            this.x + this.size / 2,
            this.y + (1 / 3) * height
        );
    }
}
