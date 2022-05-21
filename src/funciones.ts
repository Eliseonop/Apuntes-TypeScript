//funciones

/**
 *
 * Funcines con parametros por defecto
 */

function saludar (nombre: string) {
  console.log('Hola ' + nombre)
}
saludar('Juan')

function saludoOpcional (nombre?: string) {
  if (nombre) {
    console.log('Hola ' + nombre)
  } else {
    console.log('Hola')
  }
}
saludoOpcional()

//varios params

/**
 *
 * @param nombre
 * @param apellido
 * @param edad
 */
function variosParametros (nombre: string, apellido?: string): string {
  if (apellido) {
    return `Hola ${nombre} ${apellido}`
  } else {
    return `Hola ${nombre}`
  }
}
variosParametros('Juan', undefined) //undefined es un valor por defecto

function variosTipos (a: string | number) {
  if (typeof a === 'string') {
    console.log('Es un string')
  } else if (typeof a === 'number') {
    console.log('Es un number')
  }
}
variosTipos('Hola')
variosTipos(20)

//Funciones con retorno
function sumar (a: number, b: number): number {
  return a + b
}
const resultado: number = sumar(10, 20)

function spreadParametros (...numeros: number[]) {
  numeros.forEach(numero => {
    console.log(numero)
  })
}
const lista = [1, 2, 3, 4, 5]

// spreadParametros(1, 2, 3, 4, 5)
// spreadParametros(...lista)
// spreadParametros(1)

//arraow function
type Empleado = {
  nombre: string
  apellidos: string
  edad: number
}

let empleadoJuan: Empleado = {
  nombre: 'Juan',
  apellidos: 'Perez',
  edad: 20
}
/**
 *
 * @param empleado
 * @returns
 */
const mostrarEmpleado = (empleado: Empleado) =>
  `${empleado.nombre} ${empleado.apellidos} tienes ${empleado.edad} años`

mostrarEmpleado(empleadoJuan)

const datosEmpleado = (empleado: Empleado): string => {
  return `${empleado.nombre} ${empleado.apellidos} tienes ${empleado.edad} años`
}
datosEmpleado(empleadoJuan)

//obtener salario recibre como argumento Empleado y una funcione que retorna un string

const obtenerSalario = (empleado: Empleado, cobrar: () => string): string => {
  if (empleado.edad < 70) {
    return cobrar()
  } else {
    return 'No se puede cobrar'
  }
}
const cobrar = () => 'Puede Cobrar'

console.log(obtenerSalario(empleadoJuan, cobrar))

console.log(obtenerSalario(empleadoJuan, () => 'Puede cobrar'))

const cobrarEmpleado = (empleado: Empleado) => {
  console.log(`${empleado.nombre} cobra su sueldo`)
}

//Async functions
async function ejemploAsync (): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log('asincronia completada')
  return 'completado'
}

ejemploAsync()
  .then(respuesta => {
    console.log('Async: ' + respuesta)
  })
  .catch(error => console.log(error))
  .finally(() => console.log('finally'))

//Generators
function * generadorSaludos () {
  let index = 0
  while (index < 5) {
    yield Math.random()
      .toString(36)
      .substring(4) +
      new Date()
        .getTime()
        .toString(36)
        .substring(6)

    index++
  }
}
console.log(generadorSaludos())
console.log(generadorSaludos().next())
console.log(generadorSaludos().next())
console.log(generadorSaludos().next())

//Worker
function * whatcher (valor: number) {
  yield valor
  yield * worker(valor)
  yield valor + 10
}

function * worker (valor: number) {
  yield valor + 1
  yield valor + 2
  yield valor + 3
}
