



// income section 
document.getElementById('btn-calculate').addEventListener('click', function(){
    const incomeFieldElement = document.getElementById('income-field');
    const incomeFieldAmountString = incomeFieldElement.value;
    const incomeAmount = parseFloat(incomeFieldAmountString);
    // incomeFieldElement.value = '';
    if (incomeAmount === ""  || isNaN(incomeAmount)) {
        alert("please Insert only Number");
        return;
      }
     else if(incomeAmount < 0 ){
        alert('please provide positive number');
        return;
    }

    const foodFieldElement =  document.getElementById('food-field');
    const foodFieldAmountString = foodFieldElement.value;
    const foodFieldAmount = parseFloat(foodFieldAmountString);
    // foodFieldElement.value = '';
    if (foodFieldAmount === "" || isNaN(foodFieldAmount)) {
        alert("please Insert only Number");
      }

    const rentfieldElement = document.getElementById('rent-field');
    const rentfieldAmountString = rentfieldElement.value;
    const rentfieldAmount = parseFloat(rentfieldAmountString);
    // rentfieldElement.value = '';
    if (rentfieldAmount === "" || isNaN(rentfieldAmount)) {
        alert("please Insert only Number");
      }

    const clothsFieldElement = document.getElementById('cloths-field');
    const clothsFieldAmountString = clothsFieldElement.value;
    const clothsFieldAmount = parseFloat(clothsFieldAmountString);
    // clothsFieldElement.value = '';
    if (clothsFieldAmount === "" || isNaN(clothsFieldAmount)) {
        alert("please Insert only Number");
      }

    const totalExpenseElement = document.getElementById('total-expense');
    const totalExpenseAmountString = totalExpenseElement.innerText;
    const totalExpenseAmount = parseFloat(totalExpenseAmountString);

    const expense = foodFieldAmount + rentfieldAmount + clothsFieldAmount;
    // totalExpenseElement.innerText = expense;
    totalExpenseElement.innerText = expense;
    
    const balanceElement = document.getElementById('balance');
    const balanceAmountString = balanceElement.innerText;
    const balanceAmount = parseFloat(balanceAmountString);

    const balance = incomeAmount - expense;
    balanceElement.innerText = balance;   
})

document.getElementById('btn-save').addEventListener('click', function(){
    const currentincomeFieldElement = document.getElementById('income-field');
    const currentincomeFieldAmountString = currentincomeFieldElement.value;
    const currentincomeAmount = parseFloat(currentincomeFieldAmountString);
    // incomeFieldElement.value = '';

    const savepercentElement = document.getElementById('save-percent');
    const savepercentAmountString = savepercentElement.value;
    const savepercentAmount = parseInt(savepercentAmountString);
// ----
if(savepercentAmount > 100){
    alert('you can not  use  greater than 100');
    return;
}
// ----
    const savingAmountElement = document.getElementById('saving-amount');
    const savingAmountString = savingAmountElement.innerText;
    const savingAmount =  parseInt(savingAmountString);
  
    const btnSavingAmount = (currentincomeAmount * savepercentAmount) / 100 ;
    savingAmountElement.innerText = btnSavingAmount ;

})

document.getElementById('btn-save').addEventListener('click', function(){

    const balanceElement = document.getElementById('balance');
    const balanceAmountString = balanceElement.innerText;
    const balanceAmount = parseFloat(balanceAmountString);

    const savingAmountElement = document.getElementById('saving-amount');
    const savingAmountString = savingAmountElement.innerText;
    const savingAmount =  parseInt(savingAmountString);

    if(balanceAmount < savingAmount){
        alert('You do not have enough suffucient balance');
        return;
    }

    const remainingBalanceElement = document.getElementById('remaining-balance');
    const remainingBalanceAmountString = remainingBalanceElement.innerText;
    const remainingBalanceAmount = parseFloat(remainingBalanceAmountString);

    const ramainbalance = balanceAmount - savingAmount;
        remainingBalanceElement.innerText = ramainbalance;

})











