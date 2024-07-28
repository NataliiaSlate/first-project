const numberOfFigures = 25;

function setup() {
    createCanvas(windowWidth, windowHeight);

    const shapeTypes = [Circle, Triangle, Square];
    const numShapes = round(numberOfFigures / 3);

    shapes = shapeTypes.flatMap(Shape => 
        Array(numShapes)
            .fill(null)
            .map(() => {
                const size = random(height / 10, width / 7);
                const x = random(size / 2, width - size / 2);
                const y = random(size / 2, height - size / 2);

                return new Shape(x, y, size);
            })
    );
}

function draw() {
    background(255,254,224);

    shapes.forEach(shape => shape.draw());
}
