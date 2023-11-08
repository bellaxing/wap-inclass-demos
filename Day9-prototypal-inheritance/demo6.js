const animal = {
    name: 'Default',
    eats: true,
    walk: function(){ //walk work
        console.log(`${this.name} is walking!`);
    },
    setName(newName){
        this.name = newName;
    }
};


const rabbit = Object.create(animal);
rabbit.jump = true;
// rabbit.name = 'Cotton Rabbit';

rabbit.walk();
rabbit.setName('New Cotton Rabbit');
console.log(animal, rabbit);






