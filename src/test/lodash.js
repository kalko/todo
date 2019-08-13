const _ = require('lodash')
var a = [1, 2, 3];

// try to add "1" and "4" to the above Array
a = _.union(a, [1, 3, 3, 4]);

console.log(a);