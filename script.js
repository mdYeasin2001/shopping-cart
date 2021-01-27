// phone counter increase button event handler
const phoneCounterIncreaseBtn = document.getElementById('phoneCounterIncrease');
phoneCounterIncreaseBtn.addEventListener('click', function(){
    
    counterIncrease("phoneCountNumber");
    productCost("totalPhonePrice", 1219);
    productCost("subtotal", 1219);
    productCost("total", 1219);
    
    
    
    

})

// phone counter decrease button event handler
const phoneCounterDecreaseBtn = document.getElementById('phoneCounterDecrease');
phoneCounterDecreaseBtn.addEventListener('click', function(){

    counterDecrease("phoneCountNumber");
    productCost("totalPhonePrice", -1219);
    productCost("subtotal", -1219);
    productCost("total", -1219);
})

// case counter increase button event handler
const caseCounterIncreaseBtn = document.getElementById('caseCounterIncrease');
caseCounterIncreaseBtn.addEventListener('click', function(){
    
    counterIncrease("caseCountNumber");
    productCost("totalCasePrice", 59);
    productCost("subtotal", 59);
    productCost("total", 59);
})

// case counter decrease button event handler
const caseCounterDecreaseBtn = document.getElementById('caseCounterDecrease');
caseCounterDecreaseBtn.addEventListener('click', function(){
    
    counterDecrease("caseCountNumber");
    productCost("totalCasePrice", -59);
    productCost("subtotal", -59);
    productCost("total", -59);
})



// counter increase
function counterIncrease(id){
    const counterValue = document.getElementById(id).value;
    let counterValueNumber = parseFloat(counterValue);
    counterValueNumber++;
    const countIncreasedNumber = document.getElementById(id).value = counterValueNumber;
    return countIncreasedNumber;
}
// counter decrease
function counterDecrease(id){
    const counterValue = document.getElementById(id).value;
    let counterValueNumber = parseFloat(counterValue);
    counterValueNumber--;
    const countDecreaseNumber = document.getElementById(id).value = counterValueNumber;
    return countDecreaseNumber;
}
// product cost calculate
function productCost(id, oneProductValue){
    const currentValue = document.getElementById(id).innerText;
    const currentValueNumber = parseFloat(currentValue);
    const totalValue = currentValueNumber + oneProductValue;
    document.getElementById(id).innerText = totalValue;
}
//total tax calculation
const tax = document.getElementById("tax").innerText;
const taxNumber = parseFloat(tax);

// phone price remove button event handler
const phoneRemoveBtn = document.getElementById('phoneRemove');
phoneRemoveBtn.addEventListener('click', function(){
    document.getElementById("phoneCart").style.display = "none";
    amountRemove("totalPhonePrice");
})

// case price remove button event handler
const caseRemoveBtn = document.getElementById("caseRemove");
caseRemoveBtn.addEventListener('click', function(){
    document.getElementById("caseCart").style.display = "none";
    amountRemove("totalCasePrice");
})

// amount remove from subtotal and total
function amountRemove(id){
    const productTotalPrice = document.getElementById(id).innerText;
    const productTotalPriceNumber = parseFloat(productTotalPrice);
    const subtotal = document.getElementById('subtotal').innerText;
    const subtotalNumber = parseFloat(subtotal);
    const currentSubtotal = subtotalNumber - productTotalPriceNumber;
    document.getElementById("subtotal").innerText = currentSubtotal;
    const total = document.getElementById("total").innerText;
    const totalNumber = parseFloat(total);
    const currentTotal = totalNumber - productTotalPriceNumber;
    document.getElementById("total").innerText = currentTotal;
}
















