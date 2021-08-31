function promedio(lista){
   /* let sumaLista= 0;
    for(let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }*/

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista/lista.length;

    return promedioLista;
    
}

//************mediana******* */


function calcularMediana (lista){
    const listaOrdenada = lista.sort(function(a, b) {
        return a - b;
    });

    const mitadLista = parseInt(listaOrdenada.length /2) ;

    function esPar( numero){
        if (numero % 2 === 0){
            return true;
        }else{
            return false;
        }
    }
    
    let mediana;
    
    if(esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista -1];
        const elemento2 = listaOrdenada[mitadLista]
    
            const elementos = promedio([
                elemento1,
                elemento2,
            ]);
            mediana = elementos;
    
    }else{
        mediana = listaOrdenada[mitadLista];
    }
    return mediana;

    
}


//************ Moda *********** */


function moda(lista){

const listaCount={}

lista1.map(
    function (elementoNumero){
        if(listaCount[elementoNumero]){
            listaCount[elementoNumero] += 1;
        }else{
            listaCount[elementoNumero]=1;
        }

    }       

);

const listaArray = Object.entries(listaCount).sort(
    function (valorAcumulado, nuevoValor){
      return  valorAcumulado[1] - nuevoValor[1]

    }
)

const moda = listaArray[listaArray.length - 1];

}
