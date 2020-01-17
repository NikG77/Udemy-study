let money = prompt("Ваш бюджет на месяц?", ""), 
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {money, time, expenses : {}, optionalExpenses : {}, income : [], savings : false};

let questions1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let questions2 = prompt("Во сколько обойдется?", "");

expenses["ответ на первый вопрос"] = questions1;
expenses["ответ на второй вопрос"] = questions2;

alert(money / 30);



