import {add, sub, mult, div} from './mathUtils.js'

// Buttons
const addButton = document.getElementById('sum-button');
const subButton = document.getElementById('sub-button');
const multButton = document.getElementById('mult-button');
const divButton = document.getElementById('div-button');
const calcAllButton = document.getElementById['all-add', 'all-sub', 'all-mult', 'all-div']

// Inputs
    // Add
    const addInput1 = document.getElementById("add-one");
    const addInput2 = document.getElementById("add-two");
    const resultSpanAdd = document.getElementById('sum-result');
    const addValueOne = Number(addInput1.value);
    const addValueTwo = Number(addInput2.value);
    // Substract
    const subInput1 = document.getElementById("sub-one");
    const subInput2 = document.getElementById("sub-two");
    const resultSpanSub = document.getElementById('sub-result');
    const subValueOne = Number(subInput1.value);
    const subValueTwo = Number(subInput2.value);
    // Multiply
    const multInput1 = document.getElementById("mult-one");
    const multInput2 = document.getElementById("mult-two");
    const resultSpanMult = document.getElementById('mult-result');
    const multValueOne = Number(multInput1.value);
    const multValueTwo = Number(multInput2.value);
    // Divide
    const divInput1 = document.getElementById("div-one");
    const divInput2 = document.getElementById("div-two");
    const resultSpanDiv = document.getElementById('div-result');
    const divValueOne = Number(divInput1.value);
    const divValueTwo = Number(divInput2.value);
    
addButton.addEventListener("click", () => {
    const sum = add(addValueOne, addValueTwo);
    resultSpanAdd.textContent = sum;   
})

subButton.addEventListener("click", () => {
    const difference = sub(subValueOne, subValueTwo)
    resultSpanSub.textContent = difference;
})

multButton.addEventListener("click", () => {
    const product = mult(multValueOne, multValueTwo);
    resultSpanMult.textContent = product;
})

divButton.addEventListener("click", () => {
    const quotient = div(divValueOne, divValueTwo);
    resultSpanDiv.textContent = quotient;
})

// All-in-one
/*
allButton.addEventListener ("click", () => {    
    function operand(calcAllButton) {
        if (calcAllButton[0]) {
            add(firstNumber, secondNumber);
        } else if(calcAllButton[1]) {
            sub(firstNumber, secondNumber);
        } else if (calcAllButton[2]) {
            mult(firstNumber, secondNumber);
        } else if (calcAllButton[3]) {
            div(firstNumber, secondNumber);
        }
    const resultSpanAll = document.getElementById('equal-result');
    

    const allValueOne = Number(value)
    const allValueTwo = Number(value)    


    resultSpanAll.textContent = calcAllButton;
    };
})
*/