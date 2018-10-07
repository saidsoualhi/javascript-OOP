//primitives are copied by their value
let number = 10;

function increase(number) {
    number++;
}

increase(number);

console.log(number); // this return 10


//objetcs are copied by their reference
let obj = {value: 10} ;

function increase(obj) {
    obj.value++;
}

increase(obj);

console.log(obj); // this return 11
