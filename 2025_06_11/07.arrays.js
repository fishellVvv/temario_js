const colores = ['rojo', 'verde', 'azul'];

// Acceder
console.log(colores)
console.log(colores[0])
console.log(colores.length)

// Crear
colores.unshift('morado');
console.log(colores)

colores.push('blanco');
console.log(colores)

colores.splice(2, 0, 'rosa');
console.log(colores)

// Actualizar - Modificar
colores[0] = 'negro';
console.log(colores)

colores.splice(2, 1, 'amarillo');
console.log(colores)

// Borrar
colores.shift();
console.log(colores)

colores.pop();
console.log(colores)

colores.splice(1, 1);
console.log(colores)

// Ordenar
colores.sort();
console.log(colores)

// Invertir
colores.reverse();
console.log(colores)

// Métodos de consulta
colores2 = ['marrón', 'morado', 'rosa', 'amarillo', 'negro', 'blanco'];
console.log(colores2)

console.log(colores2.indexOf('azul'))

console.log(colores2.includes('azul'))

console.log(colores2.slice(2, 4))

console.log(colores2.concat(colores))

// Arrays multidimensionales
const arrayPsicopata = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(arrayPsicopata[2][2][2][1])
console.log(arrayPsicopata.flat(4)[7])
