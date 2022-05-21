//esto un comentario en TS
/**
 * Esto es un coentario
 * Multilinea
 */

console.log('Hello World')

console.log('Adios mundo')

//Declaracion de variables

let nombre: string = 'Juan' //string es una cadena de texto
let edad: number = 20 //number es un numero

const PI: number = 3.1416 //const es una constante

let apellidos: any = 'Perez' //any es cualquier cosa
let error: boolean
error = true

let a: string, b: number, c: boolean
a = 'Juan'
b = 20
c = true

//Builtin types: string, number, boolean, any, void, null, undefined

//Tipos mas complejos
let listaTareas: string[] = ['Comer', 'Dormir', 'Trabajar']

//Combinación de tipos en listas
let valores: (string | number | boolean)[] = [false, 'Hola', true, 34]

//Enumerados
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul'
}
enum PuestoCarrera {
  'Primero' = 1,
  'Segundo' = 2,
  'Tercero' = 3
}

let colores: Color = Color.Rojo
let puestoMaraton: PuestoCarrera = PuestoCarrera.Primero

//Interfaces

interface Tarea {
  nombre: string
  color: Color
  prioridad: number
}

//Podemos crear variables que sigan la interface Tarea
let tarea1: Tarea = {
  nombre: 'Comer',
  color: Color.Rojo,
  prioridad: 1
}
console.log(`Tarea: ${tarea1.nombre}`)

//Asignación múltiple de variables
let miTarea = {
  titulo: 'Mi tarea',
  estado: true,
  importacia: 3
}
//Decalarción con factor de propagación (spread)
//en variables
let { titulo, estado, importacia } = miTarea

//En listas
let listaCompraLunes: string[] = ['Leche', 'Huevos', 'Pan']
let listaCompraMartes: string[] = [...listaCompraLunes, 'Cafe']
let listaCompraMiercoles: string[] = [...listaCompraMartes, 'Cerveza']
//En objetos
let estadoApp = {
  usuario: 'admin',
  session: 3,
  //genrar una token cada vez que se inicia sesión
  jwt:
    'Bearer ' +
    new Date()
      .getTime()
      .toString(36)
      .substring(5) +
    Math.random()
      .toString(36)
      .substring(6)
}
let nuevoStadoApp = { ...estadoApp, usuario: 'juan' }
console.log(estadoApp)

//Types de TypeScript
type Producto = {
  precio: number
  nombre: string
  anio: number
}
//La diferencia entre tipos y interfaces es que los tipos son para tipos mas complejos ,generalmente son conjuntos de datos que tiene que ver con variables o tipos de datos primitivos que queremos potenciar.(string, number, boolean, any, void, null, undefined).

let coche: Producto = {
  precio: 100,
  nombre: 'Fiat',
  anio: 2020
}

//Operador Ternario
console.log(
  coche.anio < 2010
    ? `El coche: ${coche.nombre}  es nuevo`
    : `El coche ${coche.nombre} es antiguo`
)

//condicionales if - else if - else
if (error) {
  console.log('Hay error')
} else {
  console.log('No hay error')
}

//if - else if - else
if (coche.anio < 2010) {
  console.log('El coche es viejo')
} else if (coche.anio === 2020) {
  console.log('El coche es 2020')
} else {
  console.log('El coche es nuevo')
}

//Switch

switch (tarea1.color) {
  case Color.Rojo:
    console.log('El color es rojo')
    break
  case Color.Verde:
    console.log('El color es verde')
    break
  case Color.Azul:
    console.log('El color es azul')
    break

  default:
    break
}

//bucles

let listaTareasNuevas: Tarea[] = [
  { nombre: 'Comer', color: Color.Rojo, prioridad: 1 },
  { nombre: 'Dormir', color: Color.Verde, prioridad: 2 },
  { nombre: 'Trabajar', color: Color.Azul, prioridad: 3 }
]
//forEach
listaTareasNuevas.forEach((tarea: Tarea, index: number) => {
  console.log(`${index} Tarea: ${tarea.nombre}`)
})

//Fot clasico
for (let i = 0; i < listaTareasNuevas.length; i++) {
  console.log(`${i} Tarea: ${listaTareasNuevas[i].nombre}`)
}

//bucle While
while (tarea1.color !== Color.Rojo) {
  if (tarea1.prioridad === 2) {
    console.log('La tarea es prioridad 2')
    break
  } else {
    tarea1.prioridad++
  }
}
//Do While (se ejecuta al menos una vez)
do {
  tarea1.prioridad++
} while (tarea1.prioridad !== 2)
