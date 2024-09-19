// objects
// The most powerful datatype, objects are everywhere!
// Object Oriented Programming (OOP), 

const businessCar = {
    color: 'blue', // Can store strings
    make: 'Camry', // Commas (,) are required
    model: 'Toyota',
    horsePower: 4000, // Can store intigers
    year: 1989,
    milage: 18000,
    milesPerGallon: 25.5,
    damaged: false, // Can store booleans
    inStock: true,
    availableOptions: ['AC', 'Stereo', 'GPS'], // Can store Arrays
    // Can even store functions!
    // AND you can store an object in an object!
}

// access a specific datapoint with dot notation

console.log(businessCar.year) // 1989

// You can assign an object datapoint to a variable

const carMpg = businessCar.milesPerGallon
console.log(carMpg) // 25.5

const carStereo = businessCar.availableOptions[1]
console.log(carStereo) // Stereo