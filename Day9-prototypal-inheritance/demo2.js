const animal = {
    eats: true
};

/**
 * 1. create an empty object {}
 * 2. set [[Prototype]] to animal
 * 3. = > assign the empty object to rabbit
 */
let rabbit = {
    jump: true
}

rabbit = Object.create(animal);

console.log(rabbit);
