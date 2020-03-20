let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre () {
        return `1.- ${ this.nombre } ${ this.apellido } \n\tPoder: ${ this.poder }`
    },
    getNombre2: function () {
        return `2.- ${ this.nombre } ${ this.apellido } \n\tPoder: ${ this.poder }`
    }
};
console.log(deadpool.getNombre());
console.log(deadpool.getNombre2());

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let { nombre: nom, apellido, poder } = deadpool;
console.log(nom, apellido, poder);