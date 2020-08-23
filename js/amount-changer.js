var buttons = document.querySelectorAll('.product-information-amount-button');
var amount = document.getElementById('product-information-amount-input');
var amountValue = amount.value;

buttons.forEach(function(e) {
    e.addEventListener('click', function() {
        const button = e.getAttribute('id');
        changeAmount(button);
    })
})

function changeAmount(type) {
        if(type == 'product-information-amount-button-decrease') {
            if(amount.value > 1) {
                amount.value = amount.value - '1';
            }
        }
        else if(type == 'product-information-amount-button-increase') {
            amount.value = amount.value - '-1';
        }

}