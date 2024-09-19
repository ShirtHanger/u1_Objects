/* It's so common that we need to make objects with similar properties and methods that 
programming languages usually have some features to help with this.

In Javascript, ES6 added a feature called classes to accomplish this. 
A class serves as a blueprint for instantiating new objects.

Let's take a look the following Car class: */

class Car {
    constructor(model, color) {
      this.model = model;
      this.color = color;
      this.fuel = 100;
    }
    drive() {
      this.fuel--;
      return 'Vroom!';
    }
    refuel() {
      this.fuel = 100;
    }
}
  
  
const celica = new Car('Toy-Yoda Celica', 'limegreen');
const civic = new Car('Honda Civic', 'lemonchiffon');

/* Classes work a lot like the makeCar function we just created, but are 
a more performant and offer more robust features.

We use the new keyword to generate instances of a 
class (just like our earlier celica and civic examples). */

/* Note that classes typically are capital case to make it obvious 
that they are classes. T
his isn't necessary, but is a convention you should follow. */

// Classes are not really going to be used in the class