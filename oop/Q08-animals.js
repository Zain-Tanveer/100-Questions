class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  makesSound() {
    console.log(`${this.species} make '${this.sound}' sound!`);
  }
}

class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);

    this.color = color;
  }

  makesSound() {
    super.makesSound();
    console.log(`It has a beautiful '${this.color}' color.`);
  }
}

const poodle = new Dog("poodle", "woof woof", "brown");
poodle.makesSound();

// copy the content and paste it in index.js
// do 'node index.js' in terminal

// NOTE: Need to be in the basics directory.
// NOTE: Need to have node installed on your device.
