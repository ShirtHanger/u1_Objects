/* Conditionals using objects! */

const planet = {
    name: 'Saturn',
    rings: 9
}
  
if (planet.name == 'Saturn') {
console.log('Saturn is the 6th planet from the Sun!')
}

for (let i = 0; i < planet.rings; i++) {
console.log(i)
}