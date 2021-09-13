function promedio(lista) {
    /* let sumaLista= 0;
     for(let i = 0; i < lista.length; i++){
         sumaLista = sumaLista + lista[i];
     }*/

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

function botonPromedio() {
    const inputPromedio = document.getElementById("input__promedio")
    const inputValue = inputPromedio.value.split(',');
    for (let i = 0; i < inputValue.length; i++) {
        inputValue[i] = parseInt(inputValue[i]);
    }
    const resultado = promedio(inputValue);
    const parrafoPromedio = document.getElementById("parrafoPromedio");
    parrafoPromedio.innerText = resultado;
}



//************mediana******* */


function calcularMediana(lista) {
    const listaOrdenada = lista.sort(function (a, b) {
        return a - b;
    });

    const mitadLista = parseInt(listaOrdenada.length / 2);

    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista]

        const elementos = promedio([
            elemento1,
            elemento2,
        ]);
        mediana = elementos;

    } else {
        mediana = listaOrdenada[mitadLista];
    }
    return mediana;


}


function botonMediana() {
    const inputPromedio = document.getElementById("input__promedio")
    const inputValue = inputPromedio.value.split(',');
    for (let i = 0; i < inputValue.length; i++) {
        inputValue[i] = parseInt(inputValue[i]);
    }
    const resultado = promedio(inputValue);
    const parrafoMediana = document.getElementById("parrafoMediana");
    parrafoMediana.innerText = resultado;
}




//************ Moda *********** */


function moda(lista) {

    const listaCount = {}

    lista1.map(
        function (elementoNumero) {
            if (listaCount[elementoNumero]) {
                listaCount[elementoNumero] += 1;
            } else {
                listaCount[elementoNumero] = 1;
            }

        }

    );

    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1]

        }
    )

    const moda = listaArray[listaArray.length - 1];

}


function botonModa() {
    const inputPromedio =  document.getElementById("input__promedio")
    const  inputValue = inputPromedio.value.split(',');
    for(let i = 0; i < inputValue.length; i++){
        inputValue[i] = parseInt(inputValue[i]);
    }
    const resultado = promedio(inputValue);
    const parrafoModa = document.getElementById("parrafoModa");
    parrafoModa.innerText =  resultado;
}



/********* MEDIA PONDERADA ******** */
//esta media no la vamos a mostrar en el front

const notes = [{
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];


function promedioPonderado(lista) {


    const notesxcredit = notes.map(function (noteObject) {
        return noteObject.note * noteObject.credit;
    })

    const sumaNotesxCredit = notesxcredit.reduce(
        function (sum = 0, newValue) {
            return sum + newValue;
        }
    )

    const credit = notes.map(function (noteObject) {
        return noteObject.credit;
    })


    const sumaCredit = credit.reduce(
        function (sum = 0, newValue) {
            return sum + newValue;
        }
    )

    const promedioPonderado = sumaNotesxCredit / sumaCredit;
    return promedioPonderado

}