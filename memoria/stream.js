const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");
readableStream.setEncoding("UTF8");

// readableStream.on("data", (datos) => {
//   data += datos;
// });

// readableStream.on("end", () => {
//   console.log(data);
// });

// process.stdout.write("Hola");
// process.stdout.write("que");
// process.stdout.write("hace");

const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (datos, codificacion, callback) {
  datosMayus = datos.toString().toUpperCase();
  this.push(datosMayus);
  callback();
};

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
