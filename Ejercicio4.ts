// Mostrar mensaje de bienvenida
console.log("Bienvenido al servicio Lavanservis");

// Solicitar al usuario el tipo de servicio (Lavado o Planchado)
const tipoServicio: number = 1; // Reemplazar 1 con el valor adecuado (1 para Lavado, 2 para Planchado)

// Verificar el tipo de servicio seleccionado
if (tipoServicio === 1) {
  // Si el usuario eligió Lavado
  const tipoLavado: number = 1; // Reemplazar 1 con el valor adecuado (1 para En seco, 2 para Normal)
  const cantidadPrendas: number = 5; // Reemplazar 5 con la cantidad de prendas adecuada

  // Verificar el tipo de lavado seleccionado
  if (tipoLavado === 1) {
    // Si eligió lavado en seco
    const costoLavadoSeco: number = cantidadPrendas * 4000;
    console.log(`Costo total: ${costoLavadoSeco}`);
  } else if (tipoLavado === 2) {
    // Si eligió lavado normal
    const costoLavadoNormal: number = cantidadPrendas * 3000;
    console.log(`Costo total: ${costoLavadoNormal}`);
  } else {
    console.log("Opción inválida. Por favor, ingrese 1 para en seco o 2 para normal.");
  }

} else if (tipoServicio === 2) {
  // Si el usuario eligió Planchado
  const cantidadPrendas: number = 10; // Reemplazar 10 con la cantidad de prendas adecuada
  const costoPlanchado: number = cantidadPrendas * 2000 + 4000; // Se agrega costo de domicilio
  console.log(`Costo total: ${costoPlanchado}`);
} else {
  // Opción inválida de tipo de servicio
  console.log("Tipo de servicio inválido");
}
