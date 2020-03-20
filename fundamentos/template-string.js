let nombre = 'Deadpool';
let real = 'Wade Winston';

// console.log(nombre + ' ' + real);
// console.log(`${ nombre} es ${ real }`);
// let nombreCompleto = nombre + ' es ' + real;
// let nombreTemplate = `${ nombre } es ${ real }`;
// console.log(nombreCompleto === nombreTemplate);

function  getNombre() {
    return `${ nombre } es ${real}`;
}

console.log(`El nombre de: ${ getNombre()}`);