const myapp = require("./export");
console.log(myapp.name);

myapp.inc();
myapp.inc();
myapp.dec();
myapp.inc();

console.log(myapp.getCount());