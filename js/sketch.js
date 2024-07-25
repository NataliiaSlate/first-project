class Circle {
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

    createCircle() {
        circle(this.x, this.y, this.size);
    }

    fillColor() {
        fill(`rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, 0.5)`);
    }

    moveCircle() {
        this.x += this.stepsX;
        this.y += this.stepsY;

        if (this.x > width - this.size / 2 || this.x < this.size / 2) {
            this.stepsX *= -1;
            this.color = [
                floor(random(256)),
                floor(random(256)),
                floor(random(256)),
            ];
        }

        if (this.y > height - this.size / 2 || this.y < this.size / 2) {
            this.stepsY *= -1;
            this.color = [
                floor(random(256)),
                floor(random(256)),
                floor(random(256)),
            ];
        }
    }
}

const numberOfCircles = 20;
let circles;

function preload() {
    background = loadImage("../images/background-image.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    circles = Array(numberOfCircles)
        .fill(null)
        .map(() => {
            const size = random(height / 10, width / 7);

            return new Circle(
                random(size / 2, width - size / 2),
                random(size / 2, height - size / 2),
                size,
                random(-1, 5),
                random(-1, 5)
            );
        });
}

function draw() {
    image(background, 0, 0, width, height);

    circles.forEach((circle) => {
        circle.moveCircle();
        circle.fillColor();
        circle.createCircle();
    });
}
