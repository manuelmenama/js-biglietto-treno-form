//data layer

const agedDiscount = 0.4;
const youngDiscount = 0.2;
const oneKmPrice = 0.21;
let outputMsg, totalPrice, discountedPrice;

let userAge;
userAge = document.getElementById('selectDiscount').value;
let kmRequest;
kmRequest = document.getElementById('inputKm').value;
let userName;
userName = document.getElementById('inputName').value;


totalPrice = kmRequest * oneKmPrice;

//business layer
const btnInput = document.getElementById('btnSubmit');
btnInput.addEventListener('click', function(){
    document.getElementById('nome').innerHTML = userName;
    document.getElementById('offerta').innerHTML = userAge;
    let carrozza;
    carrozza =  Math.ceil(Math.random() * 10);
    document.getElementById('carrozza').innerHTML = carrozza;
    let codiceCP;
    codiceCP = Math.floor(Math.random() * 100000);
    document.getElementById('codice-CP').innerHTML = codiceCP;

    if(userAge === "minorenne"){
        discountedPrice = totalPrice * (1 - youngDiscount);
        document.getElementById('offerta').innerHTML = `Utente minorenne`;
        outputMsg = `<s>${totalPrice.toFixed(2)}</s>&euro; ${discountedPrice.toFixed(2)}&euro;`;
        

        console.log('prezzo sconto young', discountedPrice);
    }else if(userAge === "over-65"){
        discountedPrice = totalPrice * (1 - agedDiscount);
        document.getElementById('offerta').innerHTML = `Utente senior`;
        outputMsg = `<s>${totalPrice.toFixed(2)}</s>&euro; ${discountedPrice.toFixed(2)}&euro;`;
    
        console.log('prezzo sconto aged', discountedPrice);
    }else{
        document.getElementById('offerta').innerHTML = `Utente standard`;
        outputMsg = `${totalPrice.toFixed(2)} &euro;`;
    };
    
    //presentation layer
    document.getElementById('costo-finale').innerHTML = outputMsg;
    console.log('prezzo pieno', totalPrice);
});

