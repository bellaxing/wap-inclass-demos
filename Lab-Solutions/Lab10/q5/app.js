const getName = require('./pattern1');
//getName = {getName: fn}
getName();

//it'll throw error
//because getName is an object {getName: fn}
//we cannot make a function on an object