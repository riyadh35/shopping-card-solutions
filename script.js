function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number-field');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 1) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;


    // calculate total
    calculateTotal()



}






//phone increase decrease events
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})





// handle  case event increase decrease event
document.getElementById('btn-case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)
})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)
})




function getInputValue(product) {
    const productInput = document.getElementById(product + '-number-field');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}




function calculateTotal() {
    // const phoneInput = document.getElementById('phone-number-field');
    // const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}