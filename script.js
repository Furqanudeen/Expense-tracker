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

  // Add Delete Button
  const actionCell = newRow.insertCell(3);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "action-btn";
  deleteBtn.onclick = function() {
    table.deleteRow(newRow.rowIndex - 1);
  };
  actionCell.appendChild(deleteBtn);

  // Clear form
  document.getElementById("expenseForm").reset();
});
