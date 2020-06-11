
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

const mulButton = document.getElementById('mul-button');

mulButton.addEventListener("click", () => {
    const mulInput1 = document.getElementById("mul-one");
    const mulInput2 = document.getElementById("mul-two");
    const resultSpanMul = document.getElementById('mul-result');
    
    const firstValueMul = Number(mulInput1.value);
    const secondValueMul = Number(mulInput2.value);

    console.log(firstValueMul * secondValueMul);

    resultSpanMul.textContent = (firstValueMul * secondValueMul);
})