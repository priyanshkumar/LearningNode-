// Getting the elements with the help of process.argv

var a = process.argv[2];

console.log(a);

//joining the elemets after indice 2 and converting them to string
var b = process.argv.slice(2).join(" ");
console.log(b);
