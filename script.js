// phone counter increase button event handler
let counter = 1;
const phoneCounterIncreaseBtn = document.getElementById('phoneCounterIncrease');
phoneCounterIncreaseBtn.addEventListener('click', function(){
    
    counterIncrease("phoneCountNumber");
    productCost("totalPhonePrice", 1219);
    productCost("subtotal", 1219);
    
    
    
    

})

// phone counter decrease button event handler
const phoneCounterDecreaseBtn = document.getElementById('phoneCounterDecrease');
phoneCounterDecreaseBtn.addEventListener('click', function(){

    counterDecrease("phoneCountNumber");
    productCost("totalPhonePrice", -1219);
    productCost("subtotal", -1219);
})

// case counter increase button event handler
const caseCounterIncreaseBtn = document.getElementById('caseCounterIncrease');
caseCounterIncreaseBtn.addEventListener('click', function(){
    
    counterIncrease("caseCountNumber");
    productCost("totalCasePrice", 59);
    productCost("subtotal", 59);
})

// case counter decrease button event handler
const caseCounterDecreaseBtn = document.getElementById('caseCounterDecrease');
caseCounterDecreaseBtn.addEventListener('click', function(){
    
    counterDecrease("caseCountNumber");
    productCost("totalCasePrice", -59);
    productCost("subtotal", -59);
})



// counter increase
function counterIncrease(id){
    counter++;
    const countIncreasedNumber = document.getElementById(id).value = counter;
    return countIncreasedNumber;
}
// counter decrease
function counterDecrease(id){
    counter--;
    const countDecreaseNumber = document.getElementById(id).value = counter;
    return countDecreaseNumber;
}
// product cost calculate
function productCost(id, oneProductValue){
    const currentValue = document.getElementById(id).innerText;
    const currentValueNumber = parseFloat(currentValue);
    const totalValue = currentValueNumber + oneProductValue;
    document.getElementById(id).innerText = totalValue;
}
