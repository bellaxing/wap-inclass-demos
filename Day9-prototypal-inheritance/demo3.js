const animal = {
    eats: true,
    walk: function(){ //walk work
        console.log('animal walking...');
    }
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

rabbit.walk();
