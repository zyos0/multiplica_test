//1.-
function reqParam(primero, segundo, tercero) {
    if (arguments.callee.length > arguments.length)
        throw "Missing args error";
    else
        console.log('We\'re good')
}

//2
function getPlaca(nroPlaca) {
    return fetch(`some-api/${nroPlaca}`)
}

function getPlacaSucessHandler(placa) {
    getConductor(placa.dniConductor).then(getConductorSucessHandler, errorHandler)
}

function getConductor(dniConductor) {
    return fetch(`some-api/${dniConductor}`)
}

function getConductorSucessHandler(conductor) {
    console.log(conductor);
}


function errorHandler(err) {
    console.log(err.message);
    console.log(new Date().toLocaleTimeString());
}

getPlaca('ROB-MLV')
    .then(getPlacaSucessHandler, errorHandler);


//3.-
obj = {
    marca: {
        name: 'Honda',
        modelo: {
            na2me: 'CR-V'
        }
    },
    pais: 'Peru'
};

function tres(PLACA) {
    return PLACA.marca.modelo.name || 'no existe modelo';
}

tresEs6 = PLACA => PLACA.marca.modelo.name || 'no existe modelo';

console.log(tres(obj));
console.log(tresEs6(obj));


//4.-

donantes = [
    {
        name: 'Pepe',
        donacion: true,
        esposas: ['Rosangela', 'Mayte']
    },
    {
        name: 'Juan',
        donacion: false,
        esposas: ['Yahaira']
    },
    {
        name: 'Lalo',
        donacion: true,
        esposas: []
    }
];

console.log(donantes.filter(donante => donante.donacion && donante.esposas.length > 1));


//5.1-
function cincoUno() {
    let total = 0;
    let cuboTmp = 0;
    for (let i = 1; i <= 1000; i++) {
        cuboTmp = Math.pow(i, 3);
        if (cuboTmp % 2)
            total += cuboTmp;
    }
    return total;
}

console.log(cincoUno());


//5.2.-

const customReduce = (func, val, arr) => (!arr.length) ? val :
    customReduce(func, func(val, arr[0]), arr.slice(1));

const customFilter = (func, arr) => !arr.length ? [] :
    (func(arr[0]) ? [arr[0]] : []).concat(customFilter(func, arr.slice(1)));

const customMap = (func, arr) => !arr.length ? [] :
    [func(arr[0])].concat(customMap(func, arr.slice(1)));





