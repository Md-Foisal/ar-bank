//--Login Button Event handler ---------
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function(){
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";

  const bankArea = document.getElementById("bank-area");
  bankArea.style.display = "block";
})


//---deposit button handler-----------
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function(){
  const depositNumber = inputValue ("deposit-amount");
  
  currentValueUpdate ("current-deposit", depositNumber);
  currentValueUpdate ("current-balance", depositNumber);

  document.getElementById("deposit-amount").value = "";
})


//---Withdraw Button handler------
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener ("click", function () {
  const withdrawNumber = inputValue ("withdraw-amount");
  
  currentValueUpdate ("current-withdraw", withdrawNumber);
  currentValueUpdate ("current-balance", -1 * withdrawNumber);

  document.getElementById("withdraw-amount").value = "";
})




//----Input Value Function ------
function inputValue (id) {
  const amount = document.getElementById(id).value;
  const amountNum = parseFloat (amount);
  return amountNum;
}

//---Current Update function
function currentValueUpdate (id, number) {
  const current = document.getElementById(id).innerText;
  const currentNum = parseFloat(current);
  const total = currentNum + number;
  document.getElementById(id).innerText = total;
}