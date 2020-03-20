const fs = require('fs');
const colors = require('colors');

let listarTabla = async (base, limite) => {
    if ( !Number(base)) {
        throw new Error(`El valor introducido '${base}' no es un número`);
    }
    if ( !Number(limite)) {
        throw new Error(`El valor introducido '${limite}' no es un número`);
    }
    let data = '';
    for (let i = 1; i <=limite; i++) {
        data += `${base} * ${i} = ${ base * i }\n`;
    }
    console.log('============================'.blue)
    console.log(`\ttabla de ${ base }`.green)
    console.log('============================'.blue)
    console.log(data);
}

let crearArchivo = async (base, limite) => {
    if ( !Number(base)) {
        throw new Error(`El valor introducido '${base}' no es un número`);
    }
    if ( !Number(limite)) {
        throw new Error(`El valor introducido '${limite}' no es un número`);
    }
    let data = '';
    for (let i = 1; i <=limite; i++) {
        data += `${base} * ${i} = ${ base * i }\n`;
    }
    filename = `bases-node/tablas/tabla_${base}.txt`;
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        return filename;
    });
    return filename;
}

module.exports = {
    crearArchivo,
    listarTabla
}