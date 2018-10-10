
function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log(radius)
    };
}

const circle = new CreateCircle(6);

// looping for keys of circle object 
for (let key in circle)
console.log(key, circle[key])

// looping for keys that they aren't methods of circle object
for (let key in circle) {
    if (typeof circle[key] !== 'function')
    console.log(key, circle[key])
}

const keys = Object.keys(circle);
console.log(keys)