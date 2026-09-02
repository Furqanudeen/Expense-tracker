document.getElementById("expenseForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("expenseName").value;
  const amount = document.getElementById("expenseAmount").value;
  const date = document.getElementById("expenseDate").value;
  const table = document.getElementById("expenseList").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();
  newRow.insertCell(0).innerText = name;
  newRow.insertCell(1).innerText = "₹" + amount;
  newRow.insertCell(2).innerText = date;
  // Clear form
  document.getElementById("expenseForm").reset();
});
