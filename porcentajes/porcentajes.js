function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuent = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuent) / 100

    return precioConDescuento;
}

//****validar descuento con porcentajes***** */


function priceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const totalPrecio = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("PriceTotal");
    resultP.innerText = "El precion con descuento es : $" + totalPrecio

}


//*********validar descuento con cupones****** */

const coupons = [{
        name: "Platzi",
        discount: 15,
    },
    {
        name: "Programando",
        discount: 30,
    },
    {
        name: "laura",
        discount: 25,
    },
];

function priceCoupon() {


    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;


    const couponValueValid = function (coupon) {
        return coupon.name === couponValue;

    };

    const userCoupon = coupons.find(couponValueValid);


    if (!userCoupon) {
        console.log("el cupón" + couponValue + "no es valido")


    } else {
        const descuentoCupon = userCoupon.discount;
        console.log(descuentoCupon)
        const totalPrecioCupon = calcularPrecioConDescuento(priceValue, descuentoCupon);
        const resultP = document.getElementById("PriceTotal");
        resultP.innerText = "El precion con descuento es : $" + totalPrecioCupon;



    }

}









