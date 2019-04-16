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
        document.getElementById("amountMoneyUSD").value = (uah / 27.05).toFixed(2);
        document.getElementById("amountMoneyEURO").value = (uah / 30.30).toFixed(2);
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
            document.getElementById("result").value = (num_1 + num_2).toFixed(2);
        } else if (document.getElementById("minus").checked) {
            document.getElementById("result").value = (num_1 - num_2).toFixed(2);
        } else if (document.getElementById("multiply").checked) {
            document.getElementById("result").value = (num_1 * num_2).toFixed(2);
        } else {
            document.getElementById("result").value = (num_1 / num_2).toFixed(2);
        }
    }

    window.onload = function () {
        document.getElementById("btn_2").onclick = calc;
    }
}

// Задача 4. Дано списки продуктів. Знайти сумарну вартість
{
    function getSum() {

        let array = document.querySelectorAll('[class="check_product"]');
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i].checked) {
                sum += parseFloat(array[i].value);
            }
        }
        document.getElementById("price").value = sum.toFixed(2);
    }

    window.onload = function () {
        document.getElementById("btn_3").onclick = getSum;
    }
}

// Задача 5. Відобразити одновимірний масив за допомогою таблиці
{
    let a = [111, 21, 54, 34, 55];

    function showTable() {

        let table = document.getElementById('MyTable');
        let tr = document.createElement('tr');

        for (let i = 0; i < a.length; i++) {
            let td = document.createElement('td');
            td.innerHTML = `${a[i]}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    window.onload = function () {
        document.getElementById('btn_4').onclick = showTable;
    }
}

// Задача 6.  Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.
{
    function createTable() {
        let inpCount = parseInt(document.getElementById('quantity').value);
        let tbl = document.createElement('table');
        let tr = document.createElement('tr');

        for (let i = 0; i < inpCount; i++) {
            let td = document.createElement('td');
            let inp = document.createElement('input');
            inp.type = 'number';
            inp.placeholder = 'Enter rating';
            inp.min = '1';
            inp.className = 'input';

            td.appendChild(inp);
            tr.appendChild(td);
        }

        tbl.appendChild(tr);
        document.getElementById('div').appendChild(tbl);
            
        // createButton();
    }
    
    function createButton() {                               // function to create a button
        let btnAvr = document.createElement('input');
        btnAvr.type = 'button';
        btnAvr.value = 'Get average';
        btnAvr.id = 'btn_6';
        // btnAvr.setAttribute('onclick', 'getAvr()');

        document.getElementById('div').appendChild(btnAvr);
    }
    
    function getAvr() {

        let inpArr = document.querySelectorAll('table:last-child .input');
        let sum = 0;
        
        for (let i = 0; i < inpArr.length; i++) {
            sum += +inpArr[i].value;
        }
        
        let average = sum / inpArr.length;

        document.getElementById('p').innerText = `Average rating = ${average}`;
    }

    window.onload = function () {
        document.getElementById('btn_5').onclick = createTable;
        document.getElementById('btn_6').onclick = getAvr;
    }
}

// Задача 7. Сформувати список завдань ( з можливістю подальшого вилучення).
{
    function createTask() {
        let task = document.getElementById('taskInp').value;
        let taskList = document.getElementById('taskList');

        let li = document.createElement('li');
        let inp = document.createElement('input');
        inp.type = 'checkbox';
        inp.className = 'checkbox';
        let taskText = document.createTextNode(task);

        taskList.appendChild(li);
        li.appendChild(inp);
        li.appendChild(taskText);
    }

    function deleteTask() {
        let checkboxArr = document.querySelectorAll('.checkbox');
        let taskList = document.getElementById('taskList');
        
        for (let i = 0; i < checkboxArr.length; i++) {
            if (checkboxArr[i].checked) {
                taskList.removeChild(checkboxArr[i].parentElement);
            }
        }
    }
    
    window.onload = function () {
        document.querySelector('#btn_7').onclick = createTask;
        document.getElementById('btn_8').onclick = deleteTask;
    }
}

// Задача 8. Сформувати список працівників (ПІБ, посада, заробітна плата). По одному додається інформація про працівників у вигляді таблиці (як у попередньому завданні). Потім знайти сумарну заробітну плату працівників, у яких заробітна плата більша за 3000.
{
    function writeData() {
        let inpArr = document.querySelectorAll('#wrap input');
        let table = document.getElementById('table');

        let tr = document.createElement('tr');
        table.appendChild(tr);
        
        for (let i = 0; i < inpArr.length; i++) {
            tr.appendChild(document.createElement('td'));
        }

        let tdArr = table.querySelectorAll('tr:last-child td');
        
        for (let i = 0; i < tdArr.length; i++) {
            tdArr[i].innerText = inpArr[i].value;
        }
    }

    function sumSalary() {
        let salaryArr = table.querySelectorAll('td:last-child');
        let sumSalary = 0;

        for (let i = 0; i < salaryArr.length; i++) {
            if (+salaryArr[i].innerText > 3000) {
                sumSalary += +salaryArr[i].innerText;
            }
        }

        document.getElementById('sumSalary').innerText = `Sum salaries more than 3k: ${sumSalary}`;
    }

    window.onload = function () {
        document.getElementById('btn_9').onclick = writeData;
        document.getElementById('btn_10').onclick = sumSalary;
    }
}