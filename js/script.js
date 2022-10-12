//data layer
const userAge;
const kmRequest = 350;
const agedDiscount = 0.4;
const youngDiscount = 0.2;
const oneKmPrice = 0.21;


let outputMsg, totalPrice, discountedPrice, name;

totalPrice = kmRequest * oneKmPrice;

const btnInput = document.getElementById('btnSubmit');
btnInput.addEventListenerù('click', function(){

});

//business layer
if(userAge === "minorenne"){
    discountedPrice = totalPrice * (1 - youngDiscount);
    console.log('prezzo sconto young', discountedPrice.toFixed(2));
}else if(userAge === "over65"){
    discountedPrice = totalPrice * (1 - agedDiscount);
    console.log('prezzo sconto aged', discountedPrice.toFixed(2));
}

//presentation layer
console.log('prezzo pieno', totalPrice);