//Getting required elements

let firstSelect = document.querySelector('.first-select');
let billInput = document.querySelector('.bill-input');
let secondSelect = document.querySelector('.second-select');
let interestDiscountText = document.querySelector('.interestDiscount-text');
let interestDiscountInput = document.querySelector('.interest-discount-input');
let totalText = document.querySelector('.total-text');
let totalPersons = document.querySelector('.total-persons');
let additionButton = document.querySelector('.addition-button');
let subtractionButton = document.querySelector('.subtraction-button');
let throwMessage = document.querySelector('.throw-message');
let clearAll = document.querySelector('.clear-all');




//Total Bill Function


let totalBill = () => {
 
  let userSelect = firstSelect.value;
  let userBill = Number(billInput.value);
  let userSelectTwo = secondSelect.value;
  let userInterestDiscount = Number(interestDiscountInput.value);
  
  
  if(userSelectTwo == 'interest'){
   
   
   interestDiscountText.textContent = 'Interest(%)';
   let percentDivision = userInterestDiscount/100;
   let interestAmount = percentDivision * userBill;
   let interestPaid = interestAmount + userBill;
   
   if(interestDiscountInput.value.length >= 4){
    
    let amountPerPerson = (interestPaid/totalPersons.textContent).toExponential(1);
   totalText.textContent = userSelect + amountPerPerson;
   
   }
   
   else if(billInput.value.length >= 6){
    
   let amountPerPerson = (interestPaid/totalPersons.textContent).toExponential(1);
   totalText.textContent = userSelect + amountPerPerson;
   
   }
   
   else{
    
    let amountPerPerson = (interestPaid/totalPersons.textContent).toFixed(2);
   totalText.textContent = userSelect + amountPerPerson;
   
   }
   
  }
  
  else if(userSelectTwo == 'discount'){
   
   interestDiscountText.textContent = 'Discount(%)';
   let percentDivision = userInterestDiscount/100;
   let discountAmount = percentDivision * userBill;
   let discountPaid = userBill - discountAmount;
   
   
   if(interestDiscountInput.value.length >= 4){
    
    let amountPerPerson = (discountPaid/totalPersons.textContent).toExponential(1);
   totalText.textContent = userSelect + amountPerPerson;
   
   }
   
   
   else if(billInput.value.length >= 6){
    
    let amountPerPerson = (discountPaid/totalPersons.textContent).toExponential(1);
   totalText.textContent = userSelect + amountPerPerson;
   
   }
   
   
   else{
    
    let amountPerPerson = (discountPaid/totalPersons.textContent).toFixed(2);
   totalText.textContent = userSelect + amountPerPerson;
   
   }
   
  }
  
  
  else{
   
   if(billInput.value.length >= 6){
    totalText.textContent = userSelect + (userBill/totalPersons.textContent).toExponential(1);
   }
   
   else{
   totalText.textContent = userSelect + (userBill/totalPersons.textContent).toFixed(2);
   }
   
  }
 

 }
 
 
 
// Additon Button Onclick
 
 
  additionButton.onclick = () => {
  throwMessage.style.display = 'none';
  totalPersons.textContent++
  totalBill();
 }


//Subtraction Button Onclick


subtractionButton.onclick = () => {
 if(totalPersons.textContent <= 1){
  throwMessage.style.display = 'block';
  return
 }
 
 totalPersons.textContent--
 totalBill();
}


// Clear All

clearAll.onclick = () => {
 window.location.reload();
}



































































































































