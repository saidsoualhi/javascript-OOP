
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log(radius)
        }
    }
}

const circle =  createCircle(6);
circle.draw()