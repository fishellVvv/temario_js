// Si (if)
x = 18;

if(x === 18) {
    console.log("'x' es dieciocho")
}

// Si, si no (if else)
if(x === 5) {
    console.log("'x' es cinco")
} else {
    console.log("'x' no es cinco")
}

// Si, si, si no (if elif else)
if(x < 18) {
    console.log("a estudiar")
} else if(x <= 65) {
    console.log("a trabajar")
} else {
    console.log("a jugar a la petanca")
}

// Ternario
x >= 18
    ? console.log("eres mayor de edad")
    : console.log("eres menor de edad");

// Switch
nota = 6;
switch(nota) {
    case 5:
        console.log("nota: suficiente")
        break;
    case 6:
        console.log("nota: bien")
        break;
    case 7:
        console.log("nota: notable")
        break;
    case 8:
        console.log("nota: notable alto")
        break;
    case 9:
        console.log("nota: sobresaliente")
        break;
    case 10:
        console.log("nota: sobresaliente alto")
        break;
    default:
        console.log("nota: suspenso")
        break;
}
