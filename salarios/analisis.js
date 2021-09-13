
const cuotas = [{
    meses : 12,
    discount: 2,
},
{
    meses: 24,
    discount: 3,
},
{
    meses: 36,
    discount: 5,
},
];




function calcularCuota(){
const valorTotal = document.getElementById("InputTotal").value;
console.log(valorTotal)
const mesesTotal = document.getElementById("InputCuota").value;
console.log(mesesTotal)


    if (mesesTotal === "12"){
       const cuotaTotal =  valorTotal * 0.02
       const texto = document.getElementById("PriceCuota");
       texto.innerText = "El valor de la cuota es: $" + cuotaTotal

       //return cuotaTotal;

    }else if(mesesTotal === "24"){
        const cuotaTotal2 =  valorTotal * 0.03
        const texto = document.getElementById("PriceCuota");
        texto.innerText = "El valor de la cuota es: $" + cuotaTotal2

        //return cuotaTotal2;

    }else{
        const cuotaTotal3 =  valorTotal * 0.05
        const texto = document.getElementById("PriceCuota");
        texto.innerText = "El valor de la cuota es: $" + cuotaTotal3

        //return cuotaTotal3;

 
    }


}






























//*********taller 4******************* */

//helper

function esPar(numero){
    return (numero % 2 ===0)
}

function promedio(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

//calculadora Mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2 );
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1]
        const personaMitad2 = lista[mitad]
        const promedioMediana = promedio([personaMitad1,personaMitad2]);
        return promedioMediana;

    }else{
        const personaMitad = lista[mitad]
        return personaMitad;
    }
}

// mediana general
const salariosCol = colombia.map(
    function(persona){
        return persona.salary
    }
);

const salariosSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB
    }
);


const medianaGeneral = medianaSalarios(salariosSorted)

//mediana top 10


const sliceStart= (salariosSorted.length * 90) / 100;
const sliceCount = salariosSorted.length - sliceStart;

const salariosTop = salariosSorted.slice(
    sliceStart,
    sliceCount.length,
);

const medianaTop10 = medianaSalarios(salariosTop);


console.log({
    medianaGeneral,
    medianaTop10,
});