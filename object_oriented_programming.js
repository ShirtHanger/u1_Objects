/* OOP helps us to achieve the following...

Abstraction: 
    hiding all but the relevant data about an object in order to reduce complexity and increase efficiency

Encapsulation: 
    is the process of combining data and functions into a single unit

Inheritance: 
    Enables new objects to receive or inherit the properties and methods of existing objects

Polymorphism: 
    Allows for many forms of the same type of object through inheritance
    
OOP becomes very important as our front-end code grows in complexity. 
Even a simple app will have lots of code on the front-end to do things like...

    Send requests to a back-end to fetch / update / destroy data
    Update the state of the page as data changes
    Respond to events like clicking buttons
*/

/* CRUD =>
    Create
    Read
    Update
    Delete

This is important for Objects and OOP!    */

// Create

const house = {
    color: 'blue',
    noOfBedrooms: 4,
    noOfBathrooms: 2.5,
    hasMortgage: true,
    price: 45000,
}

// Read

// You're thinking on buying a house, and want to see what it's like

console.log(house.color)

// Update

// We can assign a new key and value

// You paid for a garage to the house, and it was painted white!

house.hasGarage = true
house.color = 'white' // If key exists, it is reassigned
house.price += 15000
console.log(house)

// Remove

// The house was sold! Price no longer matters

delete house.price