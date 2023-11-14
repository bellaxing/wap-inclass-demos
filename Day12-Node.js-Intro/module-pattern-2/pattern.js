//exports = module.exports;

exports.firstname = 'John';

module.exports.lastname = 'Smith';

exports = function(){
    console.log('John Smith');
}

exports.getFirstname = function(){
    console.log('John');
}

module.exports = {
    fname: 'Edward',
    lname: 'Jark'
};

module.exports.getLastname = function(){
    console.log('Smith');
}

//return module.exports