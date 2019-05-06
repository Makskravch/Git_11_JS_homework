// Приклад. Створити клас Client
// На основі цього класу створити клас GoldenClient
// Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
// -	Вивести усіх простих клієнтів;
// -	Вивести усіх клієнтів GoldenClient;
// -	Знати сумарну кількість грошей на рахунку;
{
    class Client {
        constructor(id = '-', pib = 'unknown', moneyCount = 0) {
            Object.defineProperty(this, 'id', { value: id })
            this.pib = pib
            this.moneyCount = moneyCount
        }

        addMoney(value) {
            if (value <= 0) {
                throw new Error(`Wrong value!`)
            }
            this.moneyCount += value
        }

        withdrawMoney(value) {
            if (value > this.moneyCount) {
                throw new Error(`Wrong value!`)
            }
            this.moneyCount -= value
        }

        toString() {
            return `ID: ${this.id}, PIB: ${this.pib}, money: ${this.moneyCount}`
        }
    }

    class GoldenClient extends Client {
        constructor(id = '-', pib = 'unknown', moneyCount = 0, creditLimit = 100000, creditPercent = 0.01) {
            super(id, pib, moneyCount)
            this.creditLimit = creditLimit
            this.creditPercent = creditPercent
        }

        addMoney(value) {
            super.addMoney(value)
        }

        withdrawMoney(value) {
            if (value > this.moneyCount + this.creditLimit) {
                throw new Error(`Not enough money!`)
            }
            this.moneyCount -= value
            if (this.moneyCount < 0) {
                this.creditLimit += this.moneyCount
                this.moneyCount = 0
            }
        }

        toString() {
            return `${super.toString()}, credit limit: ${this.creditLimit}, credit percent: ${this.creditPercent}`
        }
    }

    class Bank {
        constructor() {
            this.clinetArray = []
        }

        addNewClient(client) {
            this.clinetArray.push(client)
        }


        toString() {
            return `All clients: ${this.clinetArray}`
        }
    }

    window.onload = function () {
        let max = new Client(123456, 'KMG', 15000)
        let serg = new Client(321321, 'VSA', 5500)
        let pavlo = new Client(221213, 'IPM', 19000)
        let roma = new GoldenClient(789544, 'PRV', 250000, 120000)
        let sveta = new GoldenClient(687532, 'ISM', 550000, 150000)
        let ira = new GoldenClient(985632, 'PID', 150000)

        let bank = new Bank()
        bank.clinetArray = [max, serg, pavlo, roma, sveta, ira]

        bank.clinetArray.filter(element => {
            if (!element.creditLimit) {
                return console.log(element);
            }
        });

        bank.clinetArray.filter(element => {
            if (element.creditLimit) {
                return console.log(element);
            }
        });

        let sumAllMoneyInBank = bank.clinetArray.reduce((sumAllMoney, element) => sumAllMoney += element.moneyCount, 0)
        console.log(sumAllMoneyInBank)
    }
}

// Задача 1. Створити клас Dice, який представляє гральний кубик (одне поле faceCount - кліькістьграней) і дозволяє генерувати випадкове число від 1 до кількості граней. Потім на основі цього класу створити клас , який дозволяє вказати не тільки кількість граней, а й кількість спроб - attemptCount (при цьому як випадкове число повертається середнє значення).
{
    class Dice {
        constructor(faceCount = 6) {
            this.faceCount =faceCount
        }

        getScore() {
            return Math.floor(Math.random() * this.faceCount + 1)
        }
    }

    class DicePro extends Dice {
        constructor(faceCount = 6, attemptCount = 2) {
            super(faceCount)
            this.attemptCount =attemptCount
        }

        getScore() {
            if (this.attemptCount == 0) {
                throw new Error(`No more attempts!`)
            }
            this.attemptCount--
            return super.getScore()
        }
    }
}

// Задача 2. Створити клас Rectangle, який представляє прямокутник. 
// На основі цього класу створити клас Paralelepiped
{
    class Rectangle {
        constructor(a, b) {
            this.a = a
            this.b = b
        }

        areaRectangle() {
            return this.a * this.b
        }

        perimRectangle() {
            return (this.a + this.b) * 2
        }

        toString() {
            return `Side 'a': ${this.a}, side 'b': ${this.b}, area: ${this.areaRectangle()}, perimetr: ${this.perimRectangle()}`
        }
    }

    class Paralelepiped extends Rectangle {
        constructor(a, b, h) {
            super(a, b)
            this.h = h
        }

        areaParalelepiped() {
            return this.areaRectangle() * 6
        }

        volumeParalelepiped() {
            return this.a * this.b * this.h
        }

        toString() {
            return `Side 'a': ${this.a}, side 'b': ${this.b}, side 'h': ${this.h}, area: ${this.areaParalelepiped()}, volume: ${this.volumeParalelepiped()}`
        }
    }

    let rect = new Rectangle(2, 5)
    let pararect = new Paralelepiped(2, 5, 3)
    console.log(rect.areaRectangle());
    console.log(rect.perimRectangle());
    console.log(rect.toString());
    console.log(pararect.areaRectangle());
    console.log(pararect.perimRectangle());
    console.log(pararect.toString());
}