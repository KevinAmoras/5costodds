"use strict";

document.getElementById("calculate").addEventListener("click", odds);

function odds() {
    let formEl = document.forms.bruh;
    let formData = new FormData(formEl);
    let numerator = formData.get('numerator');
    let quantity = formData.get('quantity');
    let level = formData.get('level');
    let trueNumerator = parseFloat(numerator);
    let trueQuantity = parseFloat(quantity);
    let trueLevel = parseFloat(level);
    
    let top = 10 - trueNumerator;
    let bot = 80 - trueQuantity;
    let fraction = top / bot;

    let chance = (trueLevel * fraction) * 100;

    const source = ('you have a  ' + chance.toFixed(2) + '% chance of rolling that unit');

    const innerTextOutput = document.getElementById("innerTextOutput");
    innerTextOutput.value = source; 

}