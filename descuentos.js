const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajeDelPrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100

    return precioConDescuento
}

const onClickButtonPriceDiscount = () => {
    const inputPrice = document.getElementById("inputPrice")
    const priceValue = inputPrice.value

    const inputDiscount = document.getElementById("inputDiscount")
    const discountValue = inputDiscount.value

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

    const resultPrice = document.getElementById("resultPrice")
    resultPrice.innerText = `El precio con descuento son: $${precioConDescuento}`
}
