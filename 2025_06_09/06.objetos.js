const toy = {
    color: "black",
    material: "plastic",
    name: "Teacher",
    brand: "Legami",
    new: true,
};

// Acceder
console.log(toy.name)
console.log(toy["brand"])

// Crear
toy.price = 9.95;
console.log(toy)

// Actualizar - Modificar
toy.new = false;
console.log(toy)

// Borrar
delete toy.color;
console.log(toy)
