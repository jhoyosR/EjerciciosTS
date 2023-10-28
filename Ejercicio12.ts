// Crear una interfaz para representar los equipos
interface Equipo {
  puntos: any;
  [fecha: string]: {
    resultado: string;
    puntos: number;
  };
}

// Objeto para almacenar los equipos y sus resultados
const equipos: Record<string, Equipo> = {};

// Función para calcular los puntos en base a los resultados
function calcularPuntos(resultado: string): number {
  if (resultado === "victoria") {
    return 3;
  } else if (resultado === "empate") {
    return 1;
  } else {
    return 0;
  }
}

// Iterar tres veces para tres fechas particulares
for (let fecha = 1; fecha <= 3; fecha++) {
  console.log(`Fecha ${fecha}:`);
  
  // Iterar por cada equipo
  for (let i = 1; i <= 3; i++) {
    const nombreEquipo: string = `Equipo${i}`; // Reemplaza con el nombre del equipo
    const resultadoEquipo: string = "victoria"; // Reemplaza con el resultado del equipo

    // Calcular los puntos obtenidos
    const puntos: number = calcularPuntos(resultadoEquipo);
    
    // Agregar los resultados al objeto equipos
    if (!equipos[nombreEquipo]) {
      equipos[nombreEquipo] = {
        puntos: 0
      };
    }
    equipos[nombreEquipo][`fecha${fecha}`] = {
      resultado: resultadoEquipo,
      puntos: puntos
    };

    // Sumar los puntos al total del equipo
    equipos[nombreEquipo].puntos += puntos;
  }
}

// Ordenar los equipos por puntos en un arreglo
const rankingEquipos: string[] = Object.keys(equipos).sort((equipoA, equipoB) => equipos[equipoB].puntos - equipos[equipoA].puntos);

// Mostrar el ranking de equipos y sus puntos
console.log("Ranking de Equipos:");
for (let i = 0; i < rankingEquipos.length; i++) {
  const equipo: string = rankingEquipos[i];
  console.log(`${i + 1}. ${equipo} - Puntos: ${equipos[equipo].puntos}`);
}
