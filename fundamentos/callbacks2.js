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
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    }, {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (idempleado, callback) => {
  let empFound = empleados.find( emp => emp.id === idempleado );
  if (!empFound) {
      callback(`No existe el empleado con id ${ idempleado }`);
  } else {
      callback(null, empFound);
  }
};

getEmpleado(2, (err, emp) => {
    if (err) {
        return console.log(err);
    } else {
        console.log('El empleado es:', emp);
    }
});

let getSalario = (empleado, callback) => {
    let salario = salarios.find( (sal) => sal.id === empleado.id);
    if (!salario) {
        callback(`No existe el empleado con id ${ idempleado }`)
    } else {
        callback(null, { 'nombre': empleado.nombre, 'salario': salario.salario} );
    }
};

getEmpleado(4, (err, empleado) => {
    if (err) {
        return console.log(err);
    } else {
        getSalario(empleado, (err, res) => {
            if (err) {
                return console.log(err);
            } else {
                console.log(`El salario de ${ res.nombre } es ${ res.salario } $`);
            }
        })
    }
});