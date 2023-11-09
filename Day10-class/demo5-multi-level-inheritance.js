class Animal {
   country = 'US';
    constructor(name){
        // this = {}
        this.name = name;
        this.speed = 0;
    }
    static count(){
        console.log('count....');
    }

    run(speed){
        this.speed += speed;
        console.log(`${this.name} runs with speed: ${this.speed}`)
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} stop!!!`)
    }
}

class Rabbit extends Animal {
    constructor(name, earLength){
        let i = 10;
        console.log(`Rabbit constructor`);
        super(name);  
        this.earLength = earLength;
    }

    hide(){
        console.log(`${this.name} hides!!!`);
    }

    stop(){
        console.log(`Rabbit Stop!!!!`);
        super.stop();
        this.hide();
    }

    eat(){
        console.log('eat.....');
    }
}


const cotton = new Rabbit('Cotton', 100);

