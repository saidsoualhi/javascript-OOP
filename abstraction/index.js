
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function (factor) {
        console.log('computeOptimumLocation');
        // some random logic
        let computedX = defaultLocation.x + 2 + factor;
        let computedY = defaultLocation.y + 3 + factor;
        let computedResult = computedX + computedY;
        return computedResult;
    }

    this.draw = function () {
        computeOptimumLocation(1.5);
        // defaultLocation;
        //this.radius;
        console.log(computeOptimumLocation(71)) // return result of computedResult = 147
        console.log('draw')
    };
}

const circle = new Circle(47);
circle.draw();