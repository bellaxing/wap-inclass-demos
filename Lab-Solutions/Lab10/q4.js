var message = 'Hello World';

function logMessage() {

    console.log(this.message);

}

logMessage();

//global, globalThis