const { add, a } = require('./local-1')

console.log(a,add(10, 20))



//builtin module
const path = require('path')

console.log(path.basename("D:/level2/node/index.js"))
console.log(path.parse("D:/level2/node/index.js"))
console.log(path.join("D:/level2/node/","local-1.js"))