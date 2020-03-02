let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
    // time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    expenses : {},
    optionalExpenses : {},
    income : [],
    timeData : time,
    savings : true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = prompt("Во сколько обойдется?", "");

        if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            console.log('done');
        } else {                             
            console.log ("bad result");
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget(budget) {
    appData.moneyPerDay = (budget / 30).toFixed();

    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget(appData.budget);


function detectLevel() {
    if (appData.moneyPerDay < 100)  {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay < 2000 && appData.moneyPerDay > 100)  {
        console.log('средний уровень достатка');
    } else if (appData.moneyPerDay > 2000)  {
        console.log('Высокий уровень достатка');
    } 
}
detectLevel();

var optionalExpenses = {};
function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        optionalExpenses[i] = prompt("Статья необязательных расходов?", "");
    }
}



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений');
        let percent = +prompt('Под какой процент');
        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доходв в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();