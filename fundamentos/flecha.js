// function sumar(a, b) {
//     return a +b;
// }


/*
let sumar = (a, b) => {
    return a +b;
}
// Hacen lo mismo
let sumar2 = (a, b) => a +b;



console.log(sumar(10, 20));
console.log(sumar2(10, 20));
*/

function saludar() {
    return 'Hola mundo';
}

let saludar2 = () => 'Hola mundo';
console.log(saludar());
console.log(saludar2());

function saludar3(nombre) {
    return `Hola ${ nombre }`;
}

let saludar4 = (nombre) => `Hola ${ nombre }`;
console.log(saludar3('Luis'));
console.log(saludar4('Luis'));



