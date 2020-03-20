/*
setTimeout( function () {
    console.log('Hola mundo');
}, 3000);

setTimeout(  () => {
    console.log('Hola mundo 2');
}, 4000);
*/

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Fernando',
        id
    }
    if (id === 20) {
        callback(`El usuario con ${ id } no existe en la BBDD`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(30, (error, usuario) => {
    // console.log(`Usuario de BBDD es ${ usuario }`)
    if (error) {
        return console.log(error);
    }
    return console.log('Usuario de BBDD es ', usuario);
})