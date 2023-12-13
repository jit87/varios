// Simula hervir agua (una tarea asíncrona que toma tiempo)
function hervirAgua() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Agua hirviendo");
    }, 2000); // Simula una espera de 2 segundos
  });
}

// Preparar café después de que el agua hierva
function prepararCafe() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Café listo");
    }, 1000); // Simula una espera de 1 segundo
  });
}

// Usando las promesas para hacer café
hervirAgua()
  .then((mensaje) => {
    console.log(mensaje);
    return prepararCafe();
  })
  .then((mensaje) => {
    console.log(mensaje);
    console.log("Disfruta tu café");
  })
  .catch((error) => {
    console.error("Algo salió mal:", error);
  });
