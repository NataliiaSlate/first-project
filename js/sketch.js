class Helper {
    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateRandomColor() {
        return [
            this.generateRandomNumber(0, 255),
            this.generateRandomNumber(0, 255),
            this.generateRandomNumber(0, 255),
        ];
    }
}

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
        this.color = new Helper().generateRandomColor();
    }

    moveCircle() {
        this.x += this.stepsX;
        this.y += this.stepsY;

        if (this.x > width || this.x < 0) {
            this.stepsX *= -1;
        }

        if (this.y > height || this.y < 0) {
            this.stepsY *= -1;
        }
    }

    fillColor() {
        fill(`rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, 0.25)`);
    }

    createCircle() {
        circle(this.x, this.y, this.size);
    }
}

let circles = [];
const numberOfCircles = 1;
const helper = new Helper();

function preload() {
    background = loadImage('../images/background-image.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < numberOfCircles; i++) {
        const x = helper.generateRandomNumber(0, width);
        const y = helper.generateRandomNumber(0, height);
        const size = helper.generateRandomNumber(15, 130);
        const stepsX = helper.generateRandomNumber(-1, 5);
        const stepsY = helper.generateRandomNumber(-1, 5);
        circles.push(new Circle(x, y, size, stepsX, stepsY));
    }
}

function draw() {
    image(background, 0, 0, width, height);

    circles.forEach((circle) => {
        circle.moveCircle();
        circle.fillColor();
        circle.createCircle();
    });
}
