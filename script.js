const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total');

let total = 0;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('expense-name').value;
  const amount = parseFloat(document.getElementById('expense-amount').value);

  if (name && amount > 0) {
    const li = document.createElement('li');
    li.textContent = `${name} - ₹${amount}`;
    expenseList.appendChild(li);

    total += amount;
    totalDisplay.textContent = total;

    form.reset();
  }
});
