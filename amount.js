

document.getElementById('deposit_button').addEventListener('click',function(){
   var depositFild = document.getElementById('deposit_amount');
   var depositAmount = parseFloat(depositFild.value)
  

   var depositBalance = document.getElementById('deposit_balance');

   depositNumber = parseFloat(depositBalance.innerText);

   if(isNaN(depositAmount)){
    return 0;
   }

  var totalDepositBalance = depositAmount + depositNumber;
  depositBalance.innerHTML = totalDepositBalance;

  var depositTotal = document.getElementById('deposit_total');
  var depositTotalNumber = parseFloat(depositTotal.innerText);

  if(isNaN(depositTotalNumber)){
    return 0;

  }
  depositTotal.innerHTML =totalDepositBalance;


  depositFild.value = " "


})

// withdraw amount calculation started here

document.getElementById('withdraw_button').addEventListener('click',function(){

  var withdrawFild = document.getElementById('withdraw_amount');
  var withdrawNumber = parseFloat(withdrawFild.value);

  if(isNaN(withdrawNumber)){
    return 0;
  }
  

  var withdrawBalance = document.getElementById('withdraw_balance');
  var withdrawBalanceNumber = parseFloat(withdrawBalance.innerText);

  var totalWithdraw = withdrawNumber + withdrawBalanceNumber;
  withdrawBalance.innerHTML =totalWithdraw;


  var depositTotal = document.getElementById('deposit_total');
  var depositTotalNumber = parseFloat(depositTotal.innerText);
      
  if(depositTotalNumber == 0){
    return alert("You don't have enough balance to Withdraw")
  }

  depositTotalNumber = depositTotalNumber - withdrawNumber;
  depositTotal.innerHTML = depositTotalNumber;


  withdrawFild.value = " ";




})

