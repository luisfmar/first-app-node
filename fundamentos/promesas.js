let empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    }, {
        id: 2,
        nombre: 'Melissa'
    }, {
        id: 3,
        nombre: 'Juan'
    }, {
        id: 4,
        nombre: 'Maria'
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    }, {
        id: 2,
        salario: 2000
    }, {
        id: 3,
        salario: 1500
    }
];

let getEmpleado = (idempleado) => {
    return new Promise( (resolve, reject) => {
        let empleado = empleados.find( emp => emp.id === idempleado );
        if (!empleado) {
            reject(`No existe el empleado con id ${ idempleado }`);
        } else {
            resolve(empleado);
        }
    });
};

let getLetSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salario = salarios.find( (sal) => sal.id === empleado.id);
        if (!salario) {
            reject(`No existe el salario con id ${ empleado.id }`)
        } else {
            resolve({ 'nombre': empleado.nombre, 'salario': salario.salario} );
        }
    })
};
/*
getEmpleado(3).then((empleado) => {
    console.log(empleado);
}, (err) => {
    console.log(err);
});
*/

/*
getEmpleado(3).then((empleado) => {
    getLetSalario(empleado).then(salario => {
        console.log(`El salario de ${ salario.nombre } es de ${ salario.salario }`);
    }, (err2) => {
        console.log(err2);
    });
}, (err) => {
    console.log(err);
});
*/

getEmpleado(4).then((empleado) => {
    return getLetSalario(empleado);
}).then(salario => {
    console.log(`El salario de ${ salario.nombre } es de ${ salario.salario }`);
}).catch(err => {
    console.log(err);
});





