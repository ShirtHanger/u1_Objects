// Arrays are data structures, can store values, but don't know what each value means

const homeCar = ['blue', 4000, 1989]

// Objects are good for big, important collections of data


// Data in the web is stored in JavaScript Object Notation (JSNON)
// Like this...

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

// This is how data in the web is stored

// DIFFERENCES

/* Arrays are declared using the square brackets const arr = []
Objects are declared using the curly braces const obj = {}

Objects contain key-value pairs. They are are the properties of the object.

A key is really a string but we can omit the quotes.

A value is what a key refers to, and can be any datatype. */