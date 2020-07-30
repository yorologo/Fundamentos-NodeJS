function otraFuncion(params) {
  return seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(callback) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Error capturado desde la funcion asincrona");
      callback(error);
    }
  }, 1000);
}

try {
  //   otraFuncion();
  seRompeAsincrona((error) => {
    console.log(error.message);
  });
} catch (error) {
  console.error("Algo ha salido mal...");
  console.error(error);
  //   console.error(error.message);
  console.error("Pero no pasa nada, lo hemos capturado");
}
console.log("Esto de aca esta al final");
