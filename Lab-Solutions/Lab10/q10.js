const result = (function(exports, module){
    // exports = null
   /**
    module = {
        exports: {}
    }

    */
    
    

    exports = module.exports;
//exports = module.exports = {}

    exports.firstname = 'John';
//exports = module.exports = {firstname: 'JOhn'}


    module.exports.lastname = 'Smith';
//exports = module.exports = {firstname: 'JOhn', lastname: 'Smith'}

    exports = {
        getFullName: function(){
            console.log('John Smith')
        }
    }
    // exports = {getFullname: fn}
//  module.exports = {firstname: 'JOhn', lastname: 'Smith'}

    return module.exports;

}).apply(null, [null, {exports: {}}]);

console.log(result);
// {firstname: 'JOhn', lastname: 'Smith'}