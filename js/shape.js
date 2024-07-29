class Shape {
    x;
    y;
    size;
    stepsX;
    stepsY;

    constructor(x, y, size, stepsX, stepsY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.stepsX = stepsX;
        this.stepsY = stepsY;
        this.color = [
            floor(random(256)),
            floor(random(256)),
            floor(random(256)),
        ];
    }

    fillColor() {
        fill(`rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, 0.5)`);
    }

    move() {
        this.x += this.stepsX;
        this.y += this.stepsY;

        if (this.x >= width - this.size / 2 || this.x <= this.size / 2) {
            this.stepsX *= -1;
            this.color = [
                floor(random(256)),
                floor(random(256)),
                floor(random(256)),
            ];
        }

        if (this.y >= height - this.size / 2 || this.y <= this.size / 2) {
            this.stepsY *= -1;
            this.color = [
                floor(random(256)),
                floor(random(256)),
                floor(random(256)),
            ];
        }
    }

    draw() {
        this.fillColor();
        this.move();
    }
}
