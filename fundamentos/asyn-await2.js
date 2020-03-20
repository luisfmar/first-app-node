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

let getEmpleado = async (idempleado) => {

        let empleado = empleados.find( emp => emp.id === idempleado );
        if (!empleado) {
             throw new Error(`No existe el empleado con id ${ idempleado }`);
        } else {
            return empleado;
        }

};

let getSalario = async (empleado) => {

        let salario = salarios.find( (sal) => sal.id === empleado.id);
        if (!salario) {
            throw new Error(`No existe el salario para ${ empleado.nombre }`)
        } else {
            return { 'nombre': empleado.nombre, 'salario': salario.salario};
        }
};

getInformacion = async (idemp) => {
    let empleado = await getEmpleado(idemp);
    let salario = await getSalario(empleado);
    return `${ salario.nombre } tiene un salario de ${ salario.salario }$`;
}

getInformacion(1).then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
});
