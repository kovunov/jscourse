let money = prompt('Your monthly budget?', '0');
let date = prompt('Enter date in format YYYY-MM-DD', 'Hello');
let firstExpense = prompt("Enter your expenses name for this month");
let firstExpenseMoey = prompt("How much it will cost");
let appData = {
    budget : money,
    timeData : date,
    expenses : {

    },
    optionalExpenses : {},
    income : [],
    savings: false
};