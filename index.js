var fs = require("fs");
var text = fs.readFileSync("ligamagicPreco2.txt").toString('utf-8');
var textByLine = text.split("\n")
console.log(textByLine)
console.log(textByLine[2])