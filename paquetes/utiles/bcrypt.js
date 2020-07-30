const bcrypt = require("bcrypt");

const PASSWORD = "1234Segura!";

bcrypt.hash(PASSWORD, 5, (error, hash) => {
  console.log(hash);
  bcrypt.compare(PASSWORD, hash, (error, resultado) => {
    console.log(resultado);
  });
  bcrypt.compare("otra password", hash, (error, resultado) => {
    console.log(resultado);
  });
});
