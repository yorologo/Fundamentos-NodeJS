process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

process.on("exit", () => {
  console.log("El proceso ha terminado");
  setTimeout(() => {
      console.log('Esto no se va a ver nunca');
  }, 1000);
});

process.on("uncaughtException", (error, origen) => {
  console.error("Se nos ha olvidado capturar el error");
  console.error(error);
  setTimeout(() => {
    console.log('Esto viene desde las excepciones');
}, 1000);
});

FuncionQueNoExiste();
console.log('Error capturado');