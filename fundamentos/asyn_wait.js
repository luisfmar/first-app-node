/*
*   Async Await
* */

/*
let getNombre = async () => {
    throw new Error('No existe un nombre para ese usuario');
    return 'Fernando';
}

getNombre().then(nombre => {
    console.log(nombre);
}).catch(err=> {
    console.log('Error al obtener el nombre', err);
});
*/

let getNombre = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Fernando');
        }, 3000);
    });
}


let getSaludo = async () => {
    let nombre = await getNombre();
    return `Hola ${ nombre }`;
}

getSaludo().then(mensaje => {
    console.log(mensaje);
}).catch(err=> {
    console.log('Error al obtener el nombre', err);
});
