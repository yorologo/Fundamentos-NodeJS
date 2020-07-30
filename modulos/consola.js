console.log("algo");
console.info("algo");
// console.error("algo");
console.warn("algo");

var tabla = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "Otra",
  },
];
console.table(tabla);

console.group("Conversacion");
console.log("Hola");
console.group("Bla");
console.log("Bla bla bla");
console.log("Bla bla bla");
console.log("Bla bla bla");
console.log("Bla bla bla");
console.groupEnd("Bla");
console.log("Adios");
console.groupEnd("Conversacion");
console.log("Otras cosas de otra funcion");

function funcion1() {
  console.group("funcion 1");
  console.log("Esto es de la funcion 1");
  console.log("Esto tambien");
  funcion2();
  console.log("He vuelto a la funcion 1");
  console.groupEnd("funcion 1");
}
function funcion2() {
  console.group("funcion 2");
  console.log("Ahora estamos en la funcion 2");
  console.groupEnd("funcion 2");
}

console.log("Empezamos");
funcion1();

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
