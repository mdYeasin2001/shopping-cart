// phone counter increase button event handler
let counter = 1;
const phoneCounterIncreaseBtn = document.getElementById('phoneCounterIncrease');
phoneCounterIncreaseBtn.addEventListener('click', function(){
    
    counterIncrease("phoneCountNumber");
    
    
    
    

})

//phone counter decrease button event handler
const phoneCounterDecreaseBtn = document.getElementById('phoneCounterDecrease');
phoneCounterDecreaseBtn.addEventListener('click', function(){

    counterDecrease("phoneCountNumber");
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