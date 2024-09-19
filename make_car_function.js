//Define a function makeCar that takes two parameters -
// model and color - 
// and returns an object literal representing a car using those params.

const carProperties = ['model', 'color', 'price', 'year']

function makeCar(model, color) {
    const newCar = {}
    newCar.model = model
    newCar.color = color
    return newCar
}

const celicaProperties = ['Toyota Celica', 'limegreen', 8000, 1700]

// This should return a car object just like the previous example
const celica = makeCar('Toyota Celica', 'limegreen');

console.log(celica)