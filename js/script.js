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
    timeData: time,
    savings: true,
    chooseExpenses: function () {
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
        for (let i = 0; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
             appData.optionalExpenses[i] = opt;
        }
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
console.log('Наша программа включает в себя данные: ');
for (key in appData) {
    console.log(key - appData[key]);
};
