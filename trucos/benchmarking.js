let suma = 0;
console.time("todo");
console.time("bucle");
for (let index = 0; index < 100000000; index++) {
  suma += 1;
}
console.timeEnd("bucle");

let suma2 = 0;

console.time("bucle 2");
for (let index = 0; index < 100000000; index++) {
  suma2 += 1;
}
console.timeEnd("bucle 2");

console.time("asincrono");
console.log("Comienza el proceso asincrono");
asincrona().then(console.timeEnd("asincrono"));

console.timeEnd("todo");

function asincrona(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Termina el proceso asincrono");
      resolve();
    });
  });
}
