let buttonStart = document.querySelector('#start');
let budgetValue = document.querySelector('.budget-value');
let daybudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalExpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthsavingsValue = document.querySelector('.monthsavings-value');
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
});

buttonExpenses.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
        let a = inputs[i].value;
        let b = inputs[++i].value;

        if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50) {
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


let appData = {
    budget: money,
    expenses : {},
    optionalExpenses : {},
    income : [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        
    },

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100)  {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay < 2000 && appData.moneyPerDay > 100)  {
            console.log('средний уровень достатка');
        } else if (appData.moneyPerDay > 2000)  {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений');
            let percent = +prompt('Под какой процент');
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доходв в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        
    },

    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if (typeof(items) != 'string' || items == '' || typeof(items) == null) {
            console.log('Ошибка');
        } else  {
            appData.income = items.split(', ');  
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();   
        }
         
        alert('Способы доп. заработка:');

        appData.income.forEach(function(element, i) {
            alert(i + 1 + ') ' + element);
        });  
    }

}; 
// console.log('Наша программа включает в себя данные: ');
// for (key in appData) {
//     console.log(key - appData[key]);
// };
