
const addButton = document.getElementById('sum-button');
 
addButton.addEventListener("click", () => {
    const input1 = document.getElementById("add-one");
    const input2 = document.getElementById("add-two");
    const resultSpan = document.getElementById('sum-result');

    const firstValue = Number(input1.value);
    const secondValue = Number(input2.value);

    console.log(firstValue + secondValue);

    resultSpan.textContent = (firstValue + secondValue);
})

const subButton = document.getElementById('sub-button');

subButton.addEventListener("click", () => {
    const subInput1 = document.getElementById("sub-one");
    const subInput2 = document.getElementById("sub-two");
    const resultSpanSub = document.getElementById('sub-result');

    const firstValueSub = Number(subInput1.value);
    const secondValueSub = Number(subInput2.value);

    console.log(firstValueSub - secondValueSub);

    resultSpanSub.textContent = (firstValueSub - secondValueSub);
})

const multButton = document.getElementById('mult-button');

multButton.addEventListener("click", () => {
    const multInput1 = document.getElementById("mult-one");
    const multInput2 = document.getElementById("mult-two");
    const resultSpanMult = document.getElementById('mult-result');
    
    const firstValueMult = Number(multInput1.value);
    const secondValueMult = Number(multInput2.value);

    console.log(firstValueMult * secondValueMult);

    resultSpanMult.textContent = (firstValueMult * secondValueMult);
})

const divButton = document.getElementById('div-button');

divButton.addEventListener("click", () => {
    const divInput1 = document.getElementById("div-one");
    const divInput2 = document.getElementById("div-two");
    const resultSpanDiv = document.getElementById('div-result');
    
    const firstValueDiv = Number(divInput1.value);
    const secondValueDiv = Number(divInput2.value);

    console.log(firstValueDiv / secondValueDiv);

    resultSpanDiv.textContent = (firstValueDiv / secondValueDiv);
})