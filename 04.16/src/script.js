// Задача. Створити об’єкт «Клієнт»
{
    class Client {
        //----- 1. Створюємо конструктор
        constructor(clientName = 'no name', account = 'unnamed', balance = 0) {
            //---- Створюємо поля
            this.clientName = clientName;
            this.account = account;
            this.balance = balance;
        }
        //------ 2. Додаємо методи
        addMoney(value) {
            this.balance += value;
        }
        wthdraw(value) {
            if (value > this.balance) {
                throw new Error('Not enough money');
            }
            this.balance -= value;
        }
        //---- 3. Додаємо toString
        toString() {
            return `${this.clientName}: ${this.balance}`;
        }
        valueOf() {
            return this.balance;
        }
    }
    //-----------------------------------------------
    let client_1 = new Client('Ivan', '123654789654', 1000);
    document.write(client_1);
    document.write('<br>');
    client_1.addMoney(200);
    document.write(client_1);
    document.write('<br>');
    try {
        client_1.wthdraw(1000);
        document.write(client_1);
        document.write('<br>');

        client_1.wthdraw(500);
        document.write(client_1);
        document.write('<br>');
    } catch (error) {
        alert('Go to work!');
    }
}

// Задача. Створити об’єкт «Рулетка»
{
    class Roulette {
        //----- 1. Створюємо конструктор
        constructor(...scores) {
            this.scores = scores;
        }
        //------ 2. Додаємо методи
        getRandomScore() {
            let randIndex = Math.floor(Math.random() * this.scores.length);
            return this.scores[randIndex];
        }
        toString() {
            return `Roulette ${this.scores}`;
        }
    }
    //------------------------------------------------
    let roll_1 = new Roulette(50, 100, -100, -50, 0, 300, 250);
    let score = roll_1.getRandomScore();
    document.write(score);
}
// Вдосконалена рулетка
{
    // <button id="start" class="visible">
    //   Start game
    // </button>
    // <div id="container">

    class GameDrum {

        constructor(...scores) {
            this.scores = scores;
        }

        getRandomScore() {
            let randIndex = Math.floor(Math.random() * this.scores.length);
            return this.scores[randIndex];
        }

        toString() {
            return `Roulette ${this.scores}`;
        }
    }

    class Game {

        constructor(...scoresLabels) {
            this.totalScore = 0;
            this.drum = new GameDrum(...scoresLabels);
        }

        buttonClick() {
            let currentScore = this.drum.getRandomScore();
            this.totalScore += currentScore;
            this.spanTotal.innerText = this.totalScore;
            this.spanCurrent.innerText = currentScore;
        }

        render(containerId) {
            let container = document.getElementById(containerId);

            let p = document.createElement('p');
            this.spanTotal = document.createElement('span');
            this.spanTotal.innerText = '0';
            p.innerText = "Total";
            p.appendChild(this.spanTotal);
            container.appendChild(p);

            p = document.createElement('p');
            this.spanCurrent = document.createElement('span');
            this.spanCurrent.innerText = '0';
            p.innerText = "Current";
            p.appendChild(this.spanCurrent);
            container.appendChild(p);

            const btn = document.createElement('button');
            btn.innerText = "Turn";
            btn.onclick = this.buttonClick.bind(this);
            container.appendChild(btn);
        }

    }

    function start() {
        let game = new Game(50, 100, -100, -50, 0, 300, 250);
        game.render('container');
    }

    window.onload = function () {
        document.getElementById('start').onclick = start;
    }
}

// Задача. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
{
    // <input id="input" type="number" min="0" max="9" placeholder="0"><br>
    // <button id="shoot">Shoot</button>
    // <div id="container"></div>

    class ShootingGallery {

        constructor(arrField) {
            this.arrField = arrField;
        }

        render(index, idElement) {
            let div = document.getElementById(idElement);
            let p = document.createElement('p');
            let textWin = document.createTextNode('You Win!');
            let textLose = document.createTextNode('You Lose!');

            for (let i = 0; i < this.arrField.length; i++) {
                let span = document.createElement('span');
                span.innerText = this.arrField[i];
                if (index == i) {
                    span.style.color = 'red';
                }
                div.appendChild(span);
            }
            div.appendChild(p);

            if (this.arrField[index] == 1)
                p.appendChild(textWin);
            else
                p.appendChild(textLose);
        }

        toString() {
            return `Shooting field ${this.arrField}`;
        }
    }

    function createArray() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr[i] = Math.floor(Math.random() * 2);
        }
        return arr;
    }

    function shoot() {
        let index = document.getElementById('input').value;
        let arr = createArray();
        let game = new ShootingGallery(arr);
        game.render(index, 'container');
    }

    window.onload = function () {
        document.getElementById('shoot').onclick = shoot;
    }
}

// Задача. Створити об’єкт «Авто». 
{
    // <input type="text" placeholder="Enter car brand"><br>
    // <input type="number" placeholder="Enter tank volume"><br>
    // <input type="number" placeholder="Enter current number of liters"><br>
    // <input type="number" placeholder="Enter the number of places"><br>
    // <input type="number" placeholder="Enter the number of passengers"><br>
    // <input id="addAuto" type="button" value="Add auto">

    // <div id="container"></div>

    class Auto {

        constructor(brand, volumeTank, currentNumberLiters, numberSeats, numberPassengers) {
            this.brand = brand;
            this.volumeTank = volumeTank;
            this.currentNumberLiters = currentNumberLiters;
            this.numberSeats = numberSeats;
            this.numberPassengers = numberPassengers;
        }

        toString() {
            return `Brand: ${this.brand}, Volume tank: ${this.volumeTank}, Current number liters: ${this.currentNumberLiters}, Number seats: ${this.numberSeats}, Number passengers: ${this.numberPassengers}`;
        }

        refueling(quantityFuel) {
            if (quantityFuel + this.currentNumberLiters > this.volumeTank) {
                throw new Error('Not enough storage');
            }
            this.currentNumberLiters += quantityFuel;
        }

        getNumberPassengers() {
            return this.numberPassengers;
        }

        addPassengers(passengers) {
            if (this.numberPassengers + passengers > this.numberSeats) {
                throw new Error('No place');
            }
            this.numberPassengers += passengers;
        }

        disembarkationPassengers(passengers) {
            if (passengers > this.numberPassengers) {
                throw new Error('Lost passengers');
            }
            this.numberPassengers -= passengers;
        }
    }

    function createAuto() {
        let inputArr = document.querySelectorAll('input');
        let brand;
        let volumeTank;
        let currentNumberLiters;
        let numberSeats;
        let numberPassengers;

        for (let i = 0; i < inputArr.length; i++) {
            brand = inputArr[0].value;
            volumeTank = +inputArr[1].value;
            currentNumberLiters = +inputArr[2].value;
            numberSeats = +inputArr[3].value;
            numberPassengers = +inputArr[4].value;
        }

        var auto = new Auto(brand, volumeTank, currentNumberLiters, numberSeats, numberPassengers);

        render(auto);
        createNewFields();
    }

    function refuelingAuto(auto) {          // Does not work!!!
        let volume = parseInt(document.getElementById('newInp').value);
        // auto.refueling(volume);
        // render(auto);
    }

    function render(auto) {
        let div = document.getElementById('container');
        let p = document.createElement('p');
        p.id = 'p';
        p.innerText = auto.toString();
        div.appendChild(p);
    }

    function createNewFields() {
        let div = document.getElementById('container');

        let input = document.createElement('input');
        input.id = 'newInp';
        input.type = 'number';
        let btnRefueling = document.createElement('button');
        btnRefueling.id = 'btnRefueling';
        btnRefueling.innerText = 'Refueling';
        let getNumberPassengers = document.createElement('button');
        getNumberPassengers.id = 'getNumberPassengers';
        getNumberPassengers.innerText = 'Get passengers';
        let addPassengers = document.createElement('button');
        addPassengers.id = 'addPassengers';
        addPassengers.innerText = 'Get passengers';
        let disembarkationPassengers = document.createElement('button');
        disembarkationPassengers.id = 'disembarkationPassengers';
        disembarkationPassengers.innerText = 'Get passengers';

        div.appendChild(input);
        div.appendChild(btnRefueling);
        div.appendChild(getNumberPassengers);
        div.appendChild(addPassengers);
        div.appendChild(disembarkationPassengers);
    }


    window.onclick = function () {
        document.getElementById('addAuto').onclick = createAuto;
        document.getElementById('btnRefueling').onclick = refuelingAuto;
    }
}

// Задача. Розробити гру «Вгадай число». Двоє гравців записують свої варіанти. Виграє той, у кого число ближче до загаданого комп’ютером. Підраховувати кількість перемог кожного гравця.
{
    // <div id="container">
    //     First player points <input type="text" id="inp_1"> Second player points <input type="text" id="inp_2"> <br>
    //     Variant of the next number (player 1) <input type="number" id="inp_3"> Variant of the next number (player 2) <input type="number" id="inp_4"> <br>
    //     <button id="btn">Compare options</button> <br>
    // </div>

    class Game {

        constructor() {
            this.count_1 = 0;
            this.count_2 = 0;
        }

        // render() {
        //     let div = document.getElementById('container');

        //     let text_1 = document.createTextNode('First player points ');
        //     let inp_1 = document.createElement('input');
        //     inp_1.type = 'text';
        //     inp_1.id = 'inp_1';
        //     inp_1.value = this.count_1;
        //     let text_2 = document.createTextNode('Second player points ');
        //     let inp_2 = document.createElement('input');
        //     inp_2.type = 'text';
        //     inp_2.id = 'inp_2';
        //     inp_2.value = this.count_2;
        //     let text_3 = document.createTextNode('Variant of the next number (player 1) ');
        //     let inp_3 = document.createElement('input');
        //     inp_3.type = 'number';
        //     inp_3.id = 'inp_3';
        //     let text_4 = document.createTextNode('Variant of the next number (player 2) ');
        //     let inp_4 = document.createElement('input');
        //     inp_4.type = 'number';
        //     inp_4.id = 'inp_4';
        //     let btn = document.createElement('button');
        //     let btnName = 'Compare options';
        //     let br1 = document.createElement('br');
        //     let br2 = document.createElement('br');

        //     div.appendChild(text_1);
        //     div.appendChild(inp_1);
        //     div.appendChild(text_2);
        //     div.appendChild(inp_2);
        //     div.appendChild(br1);
        //     div.appendChild(text_3);
        //     div.appendChild(inp_3);
        //     div.appendChild(text_4);
        //     div.appendChild(inp_4);
        //     div.appendChild(br2);
        //     btn.innerText = btnName;
        //     div.appendChild(btn);
        // }
    }
    
    function compare() {
        let game = new Game;
        // game.render();

        let count_1 = game.count_1;
        let count_2 = game.count_2;
        let answerPlayer1 = parseInt(document.getElementById('inp_3').value);
        let answerPlayer2 = parseInt(document.getElementById('inp_4').value);
        let rnd = Math.floor(Math.random() * 100 + 1);
        
        let compareRndWithanswerPlayer1 = Math.abs(answerPlayer1 - rnd);
        let compareRndWithanswerPlayer2 = Math.abs(answerPlayer2 - rnd);
        
        if (compareRndWithanswerPlayer1 < compareRndWithanswerPlayer2) {
            document.getElementById('inp_1').value = game.count_1 + 1;
            count_1 = document.getElementById('inp_1').value;
        } else {
            document.getElementById('inp_2').value = game.count_2 + 1;
            count_2 = document.getElementById('inp_2').value;
        }
        
    }

    window.onclick = function () {
        document.getElementById('btn').onclick = compare;
    }
}

// Задача. Розробити кредитний калькулятор як окремий клас.
{
    // <div id="container">
    //     Credit summ: <input type="number" id="creditSumm"><br>
    //     Percentage rate: <input type="number" id="percentageRate"><br>
    //     Minimum loan period: <input type="number" id="minimumLoanPeriod"><br>
    //     Maximum loan period: <input type="number" id="maximumLoanPeriod"><br>

    //     Min monthly payment amount: <input type="number" id="minMonthlyPaymentAmount"><br>
    //     Max monthly payment amount: <input type="number" id="maxMonthlyPaymentAmount"><br>
    //     Overpayment amount: <input type="number" id="minOverpaymentAmount"><br>
    //     <button id="btn">Calculate</button>
    // </div>

    class Calculator {
        constructor(creditSum, percentage, minMonth, maxMonth) {
            this.creditSum = creditSum;
            this.percentage = percentage;
            this.minMonth = minMonth;
            this.maxMonth = maxMonth;
        }

        toString() {
            return `Credit summary: ${this.creditSum}, credit percentage: ${this.percentage}, The minimum term of the loan: ${this.minMonth}, The maximum term of the loan: ${this.maxMonth}`;
        }

        amountPaidOutMonthly() {
            let minMonthlyPayment = (this.creditSum * ((this.percentage / 100) + 1)) / this.maxMonth;
            let maxMonthlyPayment = (this.creditSum * ((this.percentage / 100) + 1)) / this.minMonth;
            let arr = [minMonthlyPayment, maxMonthlyPayment];
            return arr;
        }

        totalAmountOfOverpayment() {
            let AmountOfOverpayment = (this.creditSum * ((this.percentage / 100) + 1)) - this.creditSum;
            return AmountOfOverpayment;
        }

        render() {
            let div = document.getElementById('container');
            let p = document.createElement('p');
            p.innerText = toString;
            div.appendChild(p);
        }
    }

    
    function calcAllPaid() {
        let creditSum = parseFloat(document.getElementById('creditSumm').value);
        let percentage = parseFloat(document.getElementById('percentageRate').value);
        let minMonth = parseFloat(document.getElementById('minimumLoanPeriod').value);
        let maxMonth = parseFloat(document.getElementById('maximumLoanPeriod').value);

        let calcObj = new Calculator(creditSum, percentage, minMonth, maxMonth);

        let mpaArr = calcObj.amountPaidOutMonthly();
        document.getElementById('minMonthlyPaymentAmount').value = mpaArr[0];
        document.getElementById('maxMonthlyPaymentAmount').value = mpaArr[1];

        let apomArr = calcObj.totalAmountOfOverpayment();
        document.getElementById('minOverpaymentAmount').value = apomArr;

        calcObj.render();
    }

    window.onclick = function () {
        document.getElementById('btn').onclick = calcAllPaid;
    }  
}