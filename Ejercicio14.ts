// Solicitar al usuario ingresar un número entero
const numero: number = 7; // Reemplaza 7 con el número entero que desees

// Validar si el número es válido
if (!isNaN(numero)) {
  console.log(`Tabla de multiplicar del ${numero}:`);
  
  // Generar y mostrar la tabla de multiplicar
  for (let multiplicador: number = 1; multiplicador <= 10; multiplicador++) {
    const resultado: number = numero * multiplicador;
    console.log(`${numero} x ${multiplicador} = ${resultado}`);
  }
} else {
  console.log("¡El valor ingresado no es un número válido!");
}
