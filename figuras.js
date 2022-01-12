//Código del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5
// console.log('Lado del cuadrado miden ' + ladoCuadrado + "cm")

const perimetroCuadrado = (lado) => lado * 4;
perimetroCuadrado(10)
// console.log('El perímetro es ' + perimetroCuadrado + "cm")

const areaCuadrado = (lado) => lado * lado
areaCuadrado(10)
// console.log('El área del cuadrado es ' + areaCuadrado + "cm2")
console.groupEnd()


//Código del triángulo
console.group("Triángulos")

const perimetroTriangulo = (lado1, lado2, base) => {
    return console.log(lado1 + lado2 + base)
}
perimetroTriangulo(6, 6, 4)

const area = (altura, base) => {
    return console.log((altura * base) / 2)
}
area(5.5, 4)

console.groupEnd()


//Código del círculo
console.group("Círculos")

// Diámetro
const diametroCirculo = (radio) => {
    return console.log(radio * 2)
}
diametroCirculo(4)

//PI
const PI = Math.PI
console.log("___PI___" + PI + "___PI___")

//Circunferencia
const perimetroCirculo = (diametro) => {
    return console.log(diametro * PI)
}
perimetroCirculo(5)

//Ärea
const areaCirculo = (radio) => {
    return console.log((radio * radio) * PI)
}
areaCirculo(4)

console.groupEnd()


//Aquí interactuamos con el HTML
const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

const calcularAreaCuadrado = () => {
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const perimetro = areaCuadrado(value)
    alert(perimetro)
}
