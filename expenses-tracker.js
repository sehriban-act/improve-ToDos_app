const account = {
    name: 'sehriban',
    expenses: [],

    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    incomes: [],
    addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummary: function () {
        let totalExpenses = 0;
        let totalIncome = 0;
        this.expenses.forEach(function (expense) {

            totalExpenses = totalExpenses + expense.amount;
        })
        this.incomes.forEach(function (income) {
            totalIncome = totalIncome + income.amount;
        })
        return ` ${this.name} has a balance $${totalIncome-totalExpenses}. she has $${totalExpenses} in expenses and has $${totalIncome} in income`

    }
}
account.addIncome("selling book", 300)
account.addIncome("teaching", 5000)
account.addExpense("rent", 950)
account.addExpense("car", 400)
account.addExpense("food", 500)
console.log(account.getAccountSummary(account.expenses.amount));
console.log(account); // account.addExpense('Rent', 950)
// account.expenses.push('coffee', 2)
// console.log(account.expenses);