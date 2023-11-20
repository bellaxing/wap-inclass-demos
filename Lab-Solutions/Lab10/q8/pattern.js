// exports = module.exports = {}

exports.getFirstname = function () {
    console.log('Josh');
};

// exports = module.exports = {getFirstname: fn}

exports = {
    getLastname: function () {
        console.log('Edward');
    }
}
//exports = {getLastname: fn}
// module.exports = {getFirstname: fn}

module.exports = function () {
    console.log('Josh Edward1 ');
}

// module.exports = fn

module.exports.getFullname = function () {
    console.log('Josh Edward 2');
}

// module.exports = fn with a property getFullName:fn



//return module.exports