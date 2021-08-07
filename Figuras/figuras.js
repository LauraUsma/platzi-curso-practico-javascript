// Código del cuadrado

console.group("cuadrados")

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado
}
console.groupEnd()

// **********************Código del Triangulo********************
console.group("triangulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;

}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;

}

console.groupEnd()


// ******************Código del circulo******************************
console.group("circulos")

const pi = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}


function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio) {
    return (radio * radio) * pi

}


console.groupEnd()

//********************************aqui interactuamos con HTMLcuadrado**********************

function calcularPerimetroCuadrado() {
    const input = document.getElementById("input__cuadrado");
    const parrafoPerimetro = document.getElementById("cuadrado__container--parrafo")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    //alert(perimetro);
    parrafoPerimetro.innerText = `El perimetro del cuadrado es ${perimetro} cm`
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input__cuadrado");
    const value = input.value;
    const parrafoPerimetro = document.getElementById("cuadrado__container--parrafo")

    const area = areaCuadrado(value);
    parrafoPerimetro.innerText = `El area del cuadrado es ${area} cm^2`

}

//***********************TRIANGULO************** */
function calcular_Perimetro_Triangulo() {
    const input1 = document.getElementById("lado__1")
    const input2 = document.getElementById("lado__2")
    const input3 = document.getElementById("lado__base")

    const trianguloPerimetro = document.getElementById("triangulo__container--parrafo")

    lado1 = Number(input1.value)
    lado2 = Number(input2.value)
    lado3 = Number(input3.value)



    const perimetro_triangulo = perimetroTriangulo(lado1, lado2, lado3);
    console.log(perimetro_triangulo)

    trianguloPerimetro.innerText = `El perimetro del triangulo es ${perimetro_triangulo} cm`
}

function calcular_area_Triangulo() {
    const input_altura = document.getElementById("altura")
    const input_base = document.getElementById("lado__base")

    const areaPerimetro = document.getElementById("triangulo__container--parrafo")

    altura = Number(input_altura.value)
    base = Number(input_base.value)



    const area_triangulo = areaTriangulo(base, altura);
    console.log(area_triangulo)

    areaPerimetro.innerText = `El area del triangulo es ${area_triangulo} cm^2`
}


//***************************CIRCULO******************************* */

function calcular_Perimetro_circulo() {
    const inputCirculo = document.getElementById("circulo__input")
   radio_circulo = inputCirculo.value
    const circuloPerimetro = document.getElementById("circulo__container--parrafo")



    const perimetro_circulo = perimetroCirculo(radio_circulo);
    console.log(perimetro_circulo)

    circuloPerimetro.innerText = `El perimetro del circulo es ${perimetro_circulo} cm`
}



function calcular_area_circulo() {

    const area_Circulo = document.getElementById("circulo__input")

    const parrafoCirculo = document.getElementById("circulo__container--parrafo")

    area = area_Circulo.value


    const circulo_area = areaCirculo(area);
    console.log(area)

    parrafoCirculo.innerText = `El area del circulo es ${circulo_area} cm^2`
}


//*******************calcular la altura del triangulo isósceles******* */



function alturaTrianguloIsosceles() {
    let ladoA= document.getElementById("lado__isosceles--1")
    isoscelesA = Number(ladoA.value)
    console.log(isoscelesA)
    
    let ladoB= document.getElementById("lado__isosceles--2")
    isoscelesB = Number(ladoB.value)
    console.log(isoscelesB)
    
    let ladoBase= document.getElementById("lado__base--isosceles")
    isoscelesBase = Number(ladoBase.value)
    console.log(isoscelesBase)
    
    const parrafoIsosceles = document.getElementById("isosceles__container--parrafo")


    if (isoscelesA != isoscelesB) {
        console.error("Los lados a y b no son iguales");
        alert("Los lados a y b no son iguales")
    } else {
        lado_1 = isoscelesA * isoscelesB
        triangulo_base= isoscelesBase/2
        baseTotal= triangulo_base * triangulo_base

       let altura = Math.sqrt((lado_1) - (baseTotal))
       console.log(altura)
       parrafoIsosceles.innerText = `la Altura del triangulo es ${altura} cm`

    }
}