let buttonStart = document.querySelector('#start');
let budgetValue = document.querySelector('.budget-value');
let daybudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalExpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthSavingValue = document.querySelector('.monthsavings-value');
let yearsavingsValue = document.querySelector('.yearsavings-value');

let inputs = document.querySelectorAll('.expenses-item');
let buttonExpenses = document.querySelector('.expenses-item-btn');
let buttonBudget = document.querySelector('.count-budget-btn');

let inputsOptional = document.querySelectorAll('.optionalexpenses-item');
let buttonOptional = document.querySelector('.optionalexpenses-btn');

let inputChooseIncome = document.querySelector('#income');
let inputSavings = document.querySelector('#savings');
let inputSum = document.querySelector('#sum');
let inputPercent = document.querySelector('#percent');

let inputYear = document.querySelector('.year-value');
let inputMonth = document.querySelector('.month-value');
let inputDay = document.querySelector('.day-value');

let money, time;

buttonExpenses.disabled = true;
buttonOptional.disabled = true;
buttonBudget.disabled = true;


buttonStart.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();

    inputYear.value = new Date(Date.parse(time)).getFullYear();
    inputMonth.value = new Date(Date.parse(time)).getMonth() + 1;
    inputDay.value = new Date(Date.parse(time)).getDate();

    buttonExpenses.disabled = false;
    buttonOptional.disabled = false;
    buttonBudget.disabled = false;

});


buttonExpenses.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
        let a = inputs[i].value;
        let b = inputs[++i].value;

        if ( typeof(a) === 'string' && typeof(a) != null && 
        typeof(b) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
            console.log('done');
        } else {                             
            i--;
        }
    }
    expensesValue.textContent = sum;

});

buttonOptional.addEventListener('click', function () {
    for (let i = 0; i < inputsOptional.length; i++) {
        let opt = inputsOptional[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

buttonBudget.addEventListener('click', function () {

    if (appData.budget != undefined) {

        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100)  {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay < 2000 && appData.moneyPerDay > 100)  {
            levelValue.textContent = 'Cредний уровень достатка';
        } else if (appData.moneyPerDay > 2000)  {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        daybudgetValue.textContent = 'Произошла суперошибка';
    }
});

inputChooseIncome.addEventListener('input', function () {
    let items = inputChooseIncome.value;
    appData.income = items.split(', ');  
    incomeValue.textContent = appData.income;
});

inputSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

inputSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +inputSum.value;
        let percent = +inputPercent.value;

        appData.monthIncome =  sum / 100 / 12 * percent;
        appData.yearIncome =  sum / 100 * percent;
        monthSavingValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
});

inputPercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +inputSum.value;
        let percent = +inputPercent.value;

        appData.monthIncome =  sum / 100 / 12 * percent;
        appData.yearIncome =  sum / 100 * percent;
        monthSavingValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget: money,
    expenses : {},
    optionalExpenses : {},
    income : [],
    timeData: time,
    savings: false, 
}; 
