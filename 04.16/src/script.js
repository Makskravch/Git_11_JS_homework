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