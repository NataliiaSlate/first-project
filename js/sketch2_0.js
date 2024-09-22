let uniqueCirclesSet = new Set();
let circlesData = new Map();
let messageDisplay;

function setup() {
    createCanvas(windowWidth, windowHeight);
    messageDisplay = new MessageDisplay(); 
}

function draw() {
    background(255, 254, 224);

    uniqueCirclesSet.forEach((circle) => circle.draw());

    messageDisplay.draw();
}

function mousePressed() {
    const size = round(random(height / 10, width / 7));
    const x = mouseX;
    const y = mouseY;

    const newCircle = new Circle(x, y, size);

    const id = `${x}-${y}-${size}-${newCircle.color.join("-")}`;

    if (!circlesData.has(id)) {
        uniqueCirclesSet.add(newCircle);
        circlesData.set(id, { x, y, size, color: newCircle.color });
    }

    console.log('circlesSet: ', uniqueCirclesSet);
    console.log('circlesData: ', circlesData);

    const messageText =
        uniqueCirclesSet.size === 1
            ? `You have created ${uniqueCirclesSet.size} circle`
            : `You have created ${uniqueCirclesSet.size} circles`;
    messageDisplay.updateMessage(messageText);
}
