const animal = {
    eats: true
};

const rabbit = {
    jump: true
};


rabbit.__proto__ = animal;

console.log(rabbit);
