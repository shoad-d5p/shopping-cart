function updateproductnumber(product, price, isincreasing) {
    const productTnput = document.getElementById(product + '-number');
    let productnumber = productTnput.value;
    if (isincreasing) {
        productnumber = parseInt(productnumber) + 1;
    }
    else if (productnumber > 0) {
        productnumber = parseInt(productnumber) - 1;
    }
    const producttotal = document.getElementById(product + '-total')
    producttotal.innerText = productnumber * price;
    productTnput.value = productnumber;
    calculateTotal();


}
function getinputvalue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phonetotal = getinputvalue('phone') * 1219;
    const casetotal = getinputvalue('case') * 59;
    const subtotal = phonetotal + casetotal;
    const tax = subtotal / 10;
    const toatlPrice = subtotal + tax;

    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-Amount').innerText = tax;
    document.getElementById('total-price').innerText = toatlPrice;

}

// ------------------- only phone ---------------------------!
document.getElementById('phone-plus').addEventListener('click', function () {
    updateproductnumber('phone', 1229, true);

})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateproductnumber('phone', 1229, false);

})
//--------------------- phone casing-------------------------! 
document.getElementById('case-plus').addEventListener('click', function () {
    updateproductnumber('case', 59, true);

})
document.getElementById('case-minus').addEventListener('click', function () {
    updateproductnumber('case', 59, false);

})