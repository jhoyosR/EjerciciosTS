// Mostrar menú de opciones
console.log("Menú de opciones:");
console.log("1. Pizza");
console.log("2. Sándwiches");
console.log("3. Ensaladas");

// Solicitar al usuario que elija una opción
const opcion: number = 1; // Reemplaza 1 con la opción adecuada (1, 2, o 3)

let costoPorUnidad: number;
let descripcionProducto: any;

// Determinar el costo y descripción del producto según la opción seleccionada
if (opcion === 1) {
  costoPorUnidad = 7000;
  descripcionProducto = "Pizza";
} else if (opcion === 2) {
  costoPorUnidad = 5000;
  descripcionProducto = "Sándwich";
} else if (opcion === 3) {
  costoPorUnidad = 15000;
  descripcionProducto = "Ensalada";
} else {
  console.log("Opción inválida.");
}

// Solicitar la cantidad de porciones
const cantidadPorciones: number = 2; // Reemplaza 2 con la cantidad de porciones deseada

// Calcular el costo base del pedido
const costoPedido: number = 3 * cantidadPorciones;

// Preguntar si desea agregar salsa adicional
const deseaSalsa: string = "sí"; // Reemplaza "sí" con "Sí" o "No" según corresponda


// Calcular el costo total con salsa adicional si corresponde
let costoTotal: number;
if (deseaSalsa === "sí") {
  costoTotal = costoPedido + 500;
} else {
  costoTotal = costoPedido;
}

// Mostrar el costo total al usuario
console.log(`El costo total de su pedido de ${cantidadPorciones} porciones de ${descripcionProducto} es: $${costoTotal}`);
