// pattern1.js
exports.getFirstname = function () {
    console.log('Josh');
};
exports = {
    getLastname: function(){
        console.log('Edward'); 
    }
}
module.exports.getFullname = function (){
    console.log('Josh Edward'); 
}

// app.js
const {getFullname} = require('./pattern2');
getFullname();