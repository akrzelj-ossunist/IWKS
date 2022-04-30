
let log = "http://google.com"

const addNums = (a,b) => a + b;

//ovako spremamo varijable/funkcije u module priko kojeg cemo pristupiti varijablama u nekom drugom file-u
module.exports.log = log;
//Ovako mozemo poslati cijelu funkciju preko varijable
module.exports.addNums = addNums;
console.log(module.exports)