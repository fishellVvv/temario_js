// DESTRUCTURING
// ej 01 - array
const array = ["primero", "segundo", "tercero"];

// método anterior
const primero_ = array[0];
const segundo_ = array[1];
const tercero_ = array[2];

// Destructuring
const [primero, segundo, tercero] = array;

// ej 02 - objeto
const batman = {
  name: "Bruce Wayne",
  city: "Gotham",
  age: 56,
};

// método anterior
const name_ = batman.name;
const city_ = batman.city;
const age_ = batman.age;

// Destructuring
const { name, city, age } = batman;
console.log(name, city, age);

// SPREAD OPERATOR -> ...
const primerArray = [1, 2, 3];
const segundoArray = [4, 5, 6];

const nuevoArray = [...primerArray, ...segundoArray, 7, 8, 9];
const resultadoArray = [...nuevoArray, 10];
console.log(resultadoArray);

// arrays con argumentos
const datos = ["Antonio", 1990, 2025];

const calculateAge = (name, bornYear, actualYear) => {
  console.log(`La edad de ${name} es ${actualYear - bornYear}`);
};

calculateAge(...datos);

// objetos
const copiaBatman = { ...batman, age: 50 };
console.log(copiaBatman);
