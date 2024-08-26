// Your code here
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  // Class for Dog
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  // Class for Bird
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Creating instances
  let cat1 = new Cat("Whiskers", "female");
  let dog1 = new Dog("Rover", "male");
  let bird1 = new Bird("Tweety", "female");
  let bird2 = new Bird("Polly", "male");
  
  // Testing the speak method
  console.log(cat1.speak());  
  console.log(dog1.speak()); 
  console.log(bird1.speak()); 
  console.log(bird2.speak()); 
  