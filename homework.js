// No cambies los nombres de las funciones.

function usarOperadorTernario(edad) {
  // Devuelve "mayor" si edad >= 18, y "menor" en caso contrario.
  // Tu codigo:
  return edad >= 18 ? 'mayor' : 'menor';
}

function leerModuloCommonJS() {
  // Importa datos desde "./modulos/constantes-cjs.cjs" usando require.
  // Devuelve un string con el formato: "<nombreMotor> <versionObjetivo>"
  // Tu codigo:
  const { nombreMotor, versionObjetivo } = require('./modulos/constantes-cjs.cjs');

  return `${nombreMotor} ${versionObjetivo}`;
}

async function leerModuloESM() {
  // Importa datos desde "./modulos/constantes-esm.mjs" usando import dinamico.
  // Devuelve un string con el formato: "<standardModulo> | <sintaxisImport>"
  // Tu codigo:
  const { standardModulo, sintaxisImport } = await import('./modulos/constantes-esm.mjs');

  return `${standardModulo} | ${sintaxisImport}`;
}

function combinarArraysConSpread(base, extras) {
  // Devuelve un nuevo array con todos los elementos de base seguidos por extras.
  // Tu codigo:
  return [...base, ...extras];
}

function combinarObjetosConSpread(base, override) {
  // Devuelve un nuevo objeto donde "override" pisa las claves repetidas de "base".
  // Tu codigo:
  return { ...base, ...override };
}

function recolectarNotas(materia, ...notas) {
  // Rest parameter: devuelve un objeto con la materia y el array de notas.
  // Tu codigo:
  return {
    materia,
    notas,
  };
}

function obtenerPreferenciaColor(usuario) {
  // Usa optional chaining y nullish coalescing.
  // Si usuario.preferencias.color existe, devolvelo.
  // Caso contrario devolve "sin-preferencia".
  // Tu codigo:
  return usuario?.preferencias?.color ?? 'sin-preferencia'; // evitar if anidados y chequeos de null/undefined
}

function desestructurarPerfil(perfil) {
  // Extrae con alias:
  // - nombre -> nombrePersona
  // - edad -> edadPersona
  // - ciudad desde perfil.direccion.ciudad -> ciudadActual
  // Devuelve { nombrePersona, edadPersona, ciudadActual }.
  // Tu codigo:
  const {
    nombre: nombrePersona,
    edad: edadPersona,
    direccion: { ciudad: ciudadActual },
  } = perfil;

  return { nombrePersona, edadPersona, ciudadActual };
}

class Persona {
  constructor(nombre, edad) {
    // Tu codigo:
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    // Devuelve: "Soy <nombre> y tengo <edad> anios."
    // Tu codigo:
    return `Soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    // Tu codigo:
    super(nombre, edad);
    this.carrera = carrera;
  }

  presentarse() {
    // Usa super.presentarse() y agrega:
    // " Estudio <carrera>."
    // Tu codigo:
    return `${super.presentarse()} Estudio ${this.carrera}.`;
  }
}

function diasEntreFechas(fechaInicio, fechaFin) {
  // Recibe dos objetos Date y devuelve la diferencia entera en dias.
  // Tu codigo:
  const msPorDia = 1000 * 60 * 60 * 24;
  const diferenciaMs = fechaFin - fechaInicio;
  return Math.floor(diferenciaMs / msPorDia);
}

function explicarConcurrenciaYParalelismo() {
  // Devuelve un objeto:
  // {
  //   concurrencia: "...",
  //   paralelismo: "..."
  // }
  // Tu codigo:
  return {
    concurrencia:
      'La concurrencia es la capacidad de manejar múltiples tareas al mismo tiempo, pero no necesariamente ejecutándolas simultáneamente. En un entorno concurrente, las tareas pueden intercalarse, permitiendo que el sistema responda a eventos mientras otras tareas están en espera.',
    paralelismo:
      'El paralelismo es la ejecución simultánea de múltiples tareas o procesos. En un entorno paralelo, varias tareas se ejecutan al mismo tiempo en diferentes núcleos de CPU o máquinas, lo que puede mejorar el rendimiento al aprovechar los recursos disponibles.',
  };
}

function promesaDemorada(valor, ms) {
  // Devuelve una Promise que resuelve "valor" despues de "ms" milisegundos.
  // Tu codigo:
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(valor);
    }, ms);
  });
}

function promesaConValidacion(numero) {
  // Devuelve una Promise:
  // - resolve: "ok:<numero>" si numero es >= 0
  // - reject: Error("numero-invalido") si numero < 0
  // Tu codigo:
  return new Promise((resolve, reject) => {
    if (numero >= 0) {
      resolve(`ok:${numero}`);
    } else {
      reject(new Error('numero-invalido'));
    }
  });
}

module.exports = {
  usarOperadorTernario,
  leerModuloCommonJS,
  leerModuloESM,
  combinarArraysConSpread,
  combinarObjetosConSpread,
  recolectarNotas,
  obtenerPreferenciaColor,
  desestructurarPerfil,
  Persona,
  Estudiante,
  diasEntreFechas,
  explicarConcurrenciaYParalelismo,
  promesaDemorada,
  promesaConValidacion,
};
