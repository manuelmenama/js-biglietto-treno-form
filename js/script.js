//data layer
const userAge = 17;
const kmRequest = 350;
const agedDiscount = 0.4;
const youngDiscount = 0.2;
const oneKmPrice = 0.21;

let outputMsg, totalPrice, discountedPrice;

totalPrice = kmRequest * oneKmPrice

//business layer
if(userAge < 18){
    discountedPrice = totalPrice * (1 - youngDiscount);
    console.log('prezzo sconto young', discountedPrice.toFixed(2));
}else if(userAge >= 65){
    discountedPrice = totalPrice * (1 - agedDiscount);
    console.log('prezzo sconto aged', discountedPrice.toFixed(2));
}

//presentation layer
console.log('prezzo pieno', totalPrice);