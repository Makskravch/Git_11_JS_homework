// Задача 1. Користувач задає рік народження. Визначити кількість років користувача
{
    function getYear() {
        let birthYear = parseInt(document.getElementById("birthYear").value);
        document.getElementById("age").value = 2019 - birthYear;
    }

    window.onload = function () {
        document.getElementById("btn").onclick = getYear;
    }
}

// Задача 2. Конвертер валют.
{
    function convert() {
        let uah = parseFloat(document.getElementById("amountMoneyUAH").value);
        document.getElementById("amountMoneyUSD").value = Math.round((uah / 27.05)*100)/100;  Для цих цілей є спеціальний метод toFixed
        document.getElementById("amountMoneyEURO").value = Math.round((uah / 30.30)*100)/100;
    }

    window.onload = function () {
        document.getElementById("btn_1").onclick = convert;
    }
}

// Задача 3. Калькулятор з вибором операції (додавання, віднімання, множення, ділення).
{
    function calc() {
        let num_1 = parseFloat(document.getElementById("firstNum").value);
        let num_2 = parseFloat(document.getElementById("secondNum").value);
        
        if (document.getElementById("plus").checked) {
            document.getElementById("result").value = Math.round((num_1 + num_2) * 100) / 100;
        } else if (document.getElementById("minus").checked) {
            document.getElementById("result").value = Math.round((num_1 - num_2) * 100) / 100;
        } else if (document.getElementById("multiply").checked) {
            document.getElementById("result").value = Math.round((num_1 * num_2) * 100) / 100;
        } else {
            document.getElementById("result").value = Math.round((num_1 / num_2) * 100) / 100;
        }
    }

    window.onload = function () {
        document.getElementById("btn_2").onclick = calc;
    }
}

// Задача4. Дано списки продуктів. Знайти сумарну вартість
{
    function getSum() {

        let array = document.querySelectorAll('[class="check_product"]');
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i].checked) {
                sum += parseFloat(array[i].value);
            }
        }
        document.getElementById("price").value = Math.round(sum * 100) / 100;  toFixed
    }

    window.onload = function () {
        document.getElementById("btn_3").onclick = getSum;
    }
}
