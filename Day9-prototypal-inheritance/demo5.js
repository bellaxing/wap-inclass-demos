const animal = {
    eats: true,
    walk: function(){ //walk work
        console.log('animal walking...');
    }
};


const rabbit = Object.create(animal);
rabbit.jump = true;

const longEar = Object.create(rabbit); //longEar => {}
longEar.earLength = 90; //{earLength: 90}

longEar.walk = function(){
    console.log('LongEar walking')
}
// {earLength: 90, walk: fn} //we call walk is a method of longEar

longEar.walk();
console.log(longEar.eats, longEar.jump);

