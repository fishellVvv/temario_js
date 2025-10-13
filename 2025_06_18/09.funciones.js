// Funciones
function saludar () {
  console.log("Hola")
}
saludar();

// parámetro
function saludarConNombre (nombre) {
  const texto = "Hola " + nombre;
  console.log(texto)
}
saludarConNombre("Victor");

// múltiples parámetros
function sumarDosNumeros (numeroA, numeroB) {
  console.log("La suma de " + numeroA + " más " + numeroB + " es " + (numeroA + numeroB))
}
sumarDosNumeros(5, 6);

// retorno
function calcularElDoble (numero) {
  return numero * 2;
}
console.log(calcularElDoble(6))

function GuardiaDeSeguridad (edad) {
  if (typeof edad !== "number") {
    console.log("No es un número")
    return
  }

  return edad >= 18;
}
console.log(GuardiaDeSeguridad(18))

// Objeto
function calcularEdad (usuario) {
  const edad = (usuario.añoActual || 2025) - usuario.añoNacimiento;
  console.log(usuario.nombre + " cumple " + edad + " años en el " + usuario.añoActual)
}
const usuario = {
    nombre: "Victor",
    añoNacimiento: 1983,
    añoActual: 2025,
}
calcularEdad(usuario);

// Funciones Flecha
const funcionFlecha = (nombre) => {
  return "Hola " + nombre;
};
console.log(funcionFlecha("Victor"))

const funcionFlechaReducida = nombre => "Hola " + nombre
console.log(funcionFlechaReducida("Victor"))
