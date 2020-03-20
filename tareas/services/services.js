const fs = require('fs');
const path = require('path');
const dataJsonPath = path.join(__dirname, '..', 'db', 'data.json');
const colors = require('colors');

let listPdtHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listPdtHacer);
    console.log(dataJsonPath);
    fs.writeFile(dataJsonPath, data, (err) => {
        if (err) {
            throw new Error('No se pudo guardar en BBDD', err);
        }
    });
}

const cargarDB = () => {
    try {
        listPdtHacer = require(dataJsonPath);
    } catch (e) {
        listPdtHacer = [];
    }
}

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        estado: false
    };
    cargarDB();
    listPdtHacer.push( porHacer );
    guardarDB();
    return porHacer;
}

const getList = () => {
    cargarDB();
    return listPdtHacer;
}

const actualizar = (descripcion, estado = true) => {
    cargarDB();
    let index = listPdtHacer.findIndex( (e) => e.descripcion === descripcion);
    if (index <= -1) {
        throw new Error('No se ha encontrado la tarea a actualizar');
    } else {
        listPdtHacer[index].estado = estado;
        guardarDB();
        mostrarTarea(listPdtHacer[index]);
        return listPdtHacer[index];
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let newList = listPdtHacer.filter( (e) => e.descripcion !== descripcion);
    if (newList.length === listPdtHacer.length) {
        return false;
    } else {
        listPdtHacer = newList;
        guardarDB();
        return true;
    }
}

const mostrarTarea = (tarea) => {
    console.log('\t=================Tarea=======================');
    console.log(`\t\tTarea: ${tarea.descripcion.blue}`);
    let estado = tarea.estado == true ? 'Realizada'.green : 'No realizada'.red
    console.log(`\t\tEstado: ${estado}`);
    console.log('\t=============================================');
}

module.exports = {
    crear,
    getList,
    actualizar,
    mostrarTarea,
    borrar
}


