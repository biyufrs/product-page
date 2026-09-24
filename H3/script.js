const form = document.getElementById("form");

const itemInput = document.getElementById("item");
const priceInput = document.getElementById("price");

const balanceElement = document.getElementById("balance");
const expenseElement = document.getElementById("expenses");

const output = document.getElementById("output");

const emptyError = document.getElementById("emptyError");
const numError = document.getElementById("numError");
const balanceError = document.getElementById("balanceError");

let initialBalance = 200000;
let initialExpenses = 0;

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let balance = initialBalance;
let totalExpenses = initialExpenses;

// agar nominal balance bisa berkurang sesuai nominal harga yang di submit
function updateBalance() {
  let addedExpenses = 0;

  expenses.forEach(function (expense) {
    addedExpenses += expense.price;
  });

  balance = initialBalance - addedExpenses;
  totalExpenses = initialExpenses + addedExpenses;

  balanceElement.textContent = balance.toLocaleString("id-ID");
  expenseElement.textContent = totalExpenses.toLocaleString("id-ID");
}

function renderExpenses() {
  output.innerHTML = "";

  expenses.forEach(function (expense) {
    const expenseElement = document.createElement("div");
    expenseElement.classList.add("output-list");

    expenseElement.textContent = `${expense.item} - Rp ${expense.price.toLocaleString("id-ID")}`;

    output.appendChild(expenseElement);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const item = itemInput.value.trim();
  const price = priceInput.value.trim();

  if (item === "" || price === "") {
    emptyError.style.display = "flex";
  } else {
    const priceNumber = Number(price);

    if (!Number.isInteger(priceNumber) || priceNumber <= 0) {
      numError.style.display = "flex";
    } else if (priceNumber > balance) {
      balanceError.style.display = "flex";
    } else {
      emptyError.style.display = "none";
      numError.style.display = "none";
      balanceError.style.display = "none";

      const newExpense = {
        item: item,
        price: priceNumber,
      };

      expenses.push(newExpense);

      localStorage.setItem("expenses", JSON.stringify(expenses));

      updateBalance();
      renderExpenses();
    }
  }
});


