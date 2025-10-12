// let y const
let firstName = "Hades";
console.log(firstName)

const type = "dog";
console.log(type)

firstName = "Byron";
// X type = "cat";

// Ámbito de bloque
if(true) {
    console.log(firstName)
    let x = 10;
}
// X console.log(x)
