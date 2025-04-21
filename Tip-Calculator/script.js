const billinput = document.getElementById("billinput");
const tipinput = document.getElementById("tipinput");
const btn = document.getElementById("btn");
const totalAmount = document.getElementById("totalAmount");

function calculateAmount() {
  const billAmount = parseFloat(billinput.value.trim());
  const tipAmount = parseFloat(tipinput.value.trim());

  if (isNaN(billAmount) || isNaN(tipAmount)) {
    alert("Please Enter your bill");
    return;
  }

  console.log(billAmount);
  console.log(tipAmount);
  const tip = billAmount * (tipAmount / 100);
  const finalAmount = (billAmount + tip).toFixed(2);

  totalAmount.textContent = `Total:${finalAmount}`;
  billinput.value = "";
  tipinput.value = "";
}

btn.addEventListener("click", calculateAmount);
