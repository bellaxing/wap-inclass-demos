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



module.exports.getFullname = function () {
    console.log('Josh Edward');
}

//exports = {getLastname: fn}
// module.exports = {getFirstname: fn, getFullname: fn}

//return module.exports