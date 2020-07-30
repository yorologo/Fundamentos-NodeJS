function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  });
}

asincrona((error, dato) => {
  if (error) {
      console.error("Tenemos un error");
      console.error(error);
      return false;
    // throw error; // NO VA A FUNCIONAR
  }
  console.log("Todo ha ido bien", dato);
});
