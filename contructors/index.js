
function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log(radius)
    };
}

const circle = new CreateCircle(6);
circle.draw();