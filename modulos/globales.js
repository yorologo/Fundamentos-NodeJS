let iterador = 0;

let intervalo = setInterval(() => {
  if (iterador == 5) {
    clearInterval(intervalo);
  }
  console.log("Hola");
  iterador++;
}, 1000);

setImmediate(() => {
  console.log("Hola Inmediato");
});

// globalThis.miVariable = "elValor";
// console.log(miVariable);
