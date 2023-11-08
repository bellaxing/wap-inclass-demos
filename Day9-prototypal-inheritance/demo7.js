const animal = {
    walk: function () {
        if (!this.isSleeping) {
            console.log(`I walk`);
        }
    },
    sleep: function () {
        this.isSleeping = true;
    }
}

const rabbit = Object.create(animal);
rabbit.name = 'White rabbit';

rabbit.sleep(); // {name: 'white rabbit', isSleeping: true}
console.log(rabbit.isSleeping); 
console.log(animal.isSleeping); //undefined