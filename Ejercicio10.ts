// Inicializar la variable para el puntaje total
let puntajeTotal: number = 0;

// Repetir 5 veces para las 5 preguntas
for (let i: number = 1; i <= 5; i++) {
  console.log(`Pregunta ${i}:`);
  
  // Presentar la pregunta al usuario
  let pregunta: string = "";
  switch (i) {
    case 1:
      pregunta = "¿Cuál es la capital de Francia?";
      break;
    case 2:
      pregunta = "¿La Tierra gira alrededor del Sol?";
      break;
    case 3:
      pregunta = "¿Quién escribió 'Romeo y Julieta'?";
      break;
    case 4:
      pregunta = "¿Cuántos continentes hay en el mundo?";
      break;
    case 5:
      pregunta = "¿Cuál es el símbolo químico del oro?";
      break;
  }
  console.log(pregunta);
  
  // Leer la respuesta proporcionada por el usuario
  const respuesta: string = "parís"; // Reemplaza "parís" con la respuesta del usuario

  // Evaluar si la respuesta es correcta y sumar puntos
  switch (i) {
    case 1:
      if (respuesta === "parís") {
        puntajeTotal += 10;
      }
      break;
    case 2:
      if (respuesta === "verdadero") {
        puntajeTotal += 10;
      }
      break;
    case 3:
      if (respuesta === "shakespeare") {
        puntajeTotal += 10;
      }
      break;
    case 4:
      if (respuesta === "7") {
        puntajeTotal += 10;
      }
      break;
    case 5:
      if (respuesta === "au") {
        puntajeTotal += 10;
      }
      break;
  }
}

// Mostrar los resultados del examen
console.log(`Respuestas correctas: ${puntajeTotal / 10}`);
console.log(`Puntaje total obtenido: ${puntajeTotal}`);
