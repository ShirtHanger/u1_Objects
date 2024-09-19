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