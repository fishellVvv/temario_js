// for
for (let i = 0; i < 5; i++) {
    console.log("Hola", i)
}

const movies = ["John Wick", "Nosferatu", "The Evil Dead", "The Matrix"];
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i])
}

const numbers = [5, 45, 67, 2];
let counter = 0;
for (let i = 0; i < numbers.length; i++) {
    counter += numbers[i];
}
console.log("La suma de números es:", counter)

// forof
for (const number of numbers) {
    console.log(number)
}

// foreach
numbers.forEach(number => {
    console.log(number)
});

// forin
const batman = {
    name: "Bruce",
    lastname: "Wayne",
    city: "Gotham",
}

for (const key in batman) {
    console.log(batman[key])
}
