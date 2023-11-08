const animal = {
    eats: true,
    walk: function(){ //walk work
        console.log('animal walking...');
    }
};


const rabbit = Object.create(animal);
rabbit.jump = true;

const longEar = Object.create(rabbit);
longEar.earLength = 90;

longEar.walk();
console.log(longEar.eats, longEar.jump);

