const http = require("http");

let puerto = 3000;

function router(request, response) {
  console.log("Nueva Peticion");
  console.log(request.url);

  response.writeHead(201, { "Content-Type": "Text/plain" });
  
  switch (request.url) {
      case "/hola":
      response.write("Hola ya se usar HTTP de node JS");
      break;
    default:
      response.write("No se lo que quieres");
      break;
  }
  response.end();
}

http.createServer(router).listen(puerto);

console.log("Escuchando http en el puerto " + puerto);
console.log(`http://localhost:${puerto}`);
