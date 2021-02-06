const Modal = {
  open() {
    // Abrir modal
    // Adicionar a class active ao modal
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    // fechar o modal
    // remover a class active do modal
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "23/01/2021",
  },
  {
    id: 2,
    description: "Criação website",
    amount: 500000,
    date: "23/01/2021",
  },
  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "23/01/2021",
  },
  {
    id: 4,
    description: "App",
    amount: 200000,
    date: "24/01/2021",
  },
];

const Transaction = {
  all: transactions,
  add(transaction) {
    Transaction.all.push(transaction)

    App.reload()
  },
  incomes() {
    let income = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    });

    return income;
  },
  expenses() {
    let expense = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    });

    return expense;
  },
  total() {
    return Transaction.incomes() + Transaction.expenses()
  },
};

const Dom = {
  transactionsContainer: document.querySelector("#data-table tbody"),

  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = Dom.innerHTMLTrasaction(transaction);

    Dom.transactionsContainer.appendChild(tr);
  },

  innerHTMLTrasaction(transaction) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
    <td class="description">${transaction.description}</td>
    <td class="${CSSclass}">${amount}</td>
    <td class="date">${transaction.date}</td>
    <td>
      <img src="../assets/minus.svg" alt="Remover transação" />
    </td>
    `;
    return html;
  },

  updateBalance() {
    document.getElementById("income-display").innerHTML = Utils.formatCurrency(Transaction.incomes());
    document.getElementById("expense-display").innerHTML =  Utils.formatCurrency(Transaction.expenses());
    document.getElementById("total-display").innerHTML = Utils.formatCurrency(Transaction.total());
  },
 
  clearTransactions() {
    Dom.transactionsContainer.innerHTML = ""
  }

};

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "");
    value = Number(value) / 100;
    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return signal + value;
  },
};

const App = {
  init() {

    Transaction.all.forEach(transaction => {
      Dom.addTransaction(transaction);
    });
    
    Dom.updateBalance();
    


  },
  reload() {
    Dom.clearTransactions()
    App.init()
    
  },
}


App.init()

Transaction.add({
  id:5,
  description:"Roupinha pra buneco",
  amount:15000,
  date:"02/02/2021"
})
