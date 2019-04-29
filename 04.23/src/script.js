// Задача 1. Створити клас, що представляє прямокутник і має методи для знаходження площі, периметру та масштабування.
{
    class Rectangle {
        constructor(a, b) {
            this.a = a;
            this.b = b;
        }

        square() {
            return this.a * this.b;
        }

        perimeter() {
            return (this.a + this.b) * 2;
        }

        scaling(scale) {
            if (scale <= 0) {
                throw new Error('Wrong value of scale.');
            }
            this.scale = scale;
            this.a *= this.scale;
            this.b *= this.scale;
        }

        toString() {
            return `Side a: ${this.a}, side b: ${this.b}.`;
        }
    }
}

// Приклад. Клас «Таракан»
{
    // <div id="gameField"></div>

    class Tarakan {
        constructor(maxX, maxY, size) {
            this.maxX = maxX
            this.maxY = maxY
            this.size = size
            this.left = this.getRandomValue(1, maxX)
            this.top = this.getRandomValue(1, maxY)
            this.speed = 200 + this.getRandomValue(0, 800)
        }
        getRandomValue(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1))
        }
        correctValuePosition(value, maxValue) {
            if (value < 0)
                return maxValue + value
            if (value > maxValue)
                return value - maxValue
            return value
        }
        move() {
            this.left += this.getRandomValue(-20, 20)
            this.left = this.correctValuePosition(this.left, this.maxX)
            this.top += this.getRandomValue(-20, 20)
            this.top = this.correctValuePosition(this.top, this.maxY)
            this.creature.style.left = this.left + "px";
            this.creature.style.top = this.top + "px";
        }
        onClick() {
            clearInterval(this.timer)
            this.creature.style.backgroundColor = "red"
        }
        render(containerId) {
            this.creature = document.createElement("button")
            this.creature.innerText = "@"
            this.creature.style.position = "absolute"
            this.creature.style.width = this.size + "px"
            this.creature.style.height = this.size + "px"
            this.creature.style.left = this.left + "px"
            this.creature.style.top = this.top + "px"
            this.creature.style.cursor = "pointer"
            this.creature.onclick = this.onClick.bind(this)
            document.getElementById(containerId).appendChild(this.creature)
            this.timer = setInterval(this.move.bind(this), this.speed)
        }
    }
    //---------------
    let tarakans = [];
    window.onload = function () {
        for (let i = 0; i < 10; i++) {
            let tarakan = new Tarakan(1000, 300, 30);
            tarakan.render("gameField")
            tarakans.push(tarakan)
        }
    }
}

// Задача 2. Створити клас Product, що представляє товар на складі
// поля:
// 	Назва товару
// 	Кількість одиниць
// 	Ціна одиниці
// методи:
// 	зменшення кількості товару
// 	збільшення кількості товару
// 	визначення вартості вказаної кількості товару
// 	нарахування вказаної знижки (у відсотках)
// 	визначення загальної вартості товару
// На основі цього класу визначити сумарну вартість усіх товарів, та нарахувати знижку на усі товари, ціна яких перевищує 1000 грн.
{
    // <div id="container">
    //     <input type="text" id="productName" placeholder="Enter name product">
    //     <input type="number" id="productCount" placeholder="Enter count product">
    //     <input type="number" id="productCost" placeholder="Enter cost product">
    //     <input type="button" id="btn" value="Add product">
    // </div>

    class Product {
        constructor(name, count, cost) {
            this.name = name
            this.count = count
            this.cost = cost
        }

        decreaseProducts(decreaseCount) {
            if (decreaseCount < this.count) {
                throw new Error('Insufficient goods in stock.')
            }
            this.count -= decreaseCount;
        }

        increaseProducts(increaseCount) {
            this.count += increaseCount
        }

        costOfWholeProducts(countProducts) {
            return this.cost * countProducts
        }

        discountCharge(discount) {
            this.discount = this.cost - this.cost * discount / 100
        }

        costOfTotalProducts() {
            return this.cost * this.count
        }
    }


    let productArr = []

    function addProduct() {
        let productName = document.getElementById('productName').value
        let productCount = parseFloat(document.getElementById('productCount').value)
        let productCost = parseFloat(document.getElementById('productCost').value)

        let newProduct = new Product(productName, productCount, productCost)

        // if (productArr.length !== 0) {
        //     for (let i = 0; i < productArr.length; i++) {
        //         if (productArr[i].name !== productName) {   // НЕ ПРАЦЮЄ (якщо такий name вже існує то кидати Error) 
        //             throw new Error('This item already exists')
        //         }
        //         productArr.push(newProduct)
        //     }
        // } else {
        //     productArr.push(newProduct)
        // }

        productArr.push(newProduct)

        discount(productArr)
        console.log(`Total cost of all products: ${totalCostOfAllProducts(productArr)}`)
        console.log(productArr)
    }

    function totalCostOfAllProducts(productArr) {
        let totalCost = 0;
        for (let i = 0; i < productArr.length; i++) {
            totalCost += productArr[i].costOfTotalProducts()
        }
        return totalCost
    }

    function discount(productArr) {
        for (let i = 0; i < productArr.length; i++) {
            if (productArr[i].cost > 1000) {
                productArr[i].discountCharge(20)
            }
        }
    }

    window.onload = function () {
        document.getElementById('btn').onclick = addProduct
    }
}

// Задача 5. Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.
{
    // <input type="number" id="input">
    // <input type="button" id="btn" value="Button"></input>

    class TBankomat {
        constructor() {
            this.faceValue5 = this.getRandomValue()
            this.faceValue10 = this.getRandomValue()
            this.faceValue20 = this.getRandomValue()
            this.faceValue50 = this.getRandomValue()
            this.faceValue100 = this.getRandomValue()
            this.faceValue200 = this.getRandomValue()
        }

        toString() {
            console.log(`Count 5: ${this.faceValue5}, count 10: ${this.faceValue10}, count 20: ${this.faceValue20}, count 50: ${this.faceValue50}, count 100: ${this.faceValue100}, count 200: ${this.faceValue200}`);
        }

        getRandomValue(min = 0, max = 100) {
            return Math.floor(min + Math.random() * (max - min + 1))
        }

        getMaxSum() {
            return this.faceValue5 * 5 + this.faceValue10 * 10 + this.faceValue20 * 20 + this.faceValue50 * 50 + this.faceValue100 * 100 + this.faceValue200 * 200
        }

        getMinSum() {
            if (this.faceValue5 !== 0) {
                return 5
            }
            if (this.faceValue10 !== 0) {
                return 10
            }
            if (this.faceValue20 !== 0) {
                return 20
            }
            if (this.faceValue50 !== 0) {
                return 50
            }
            if (this.faceValue100 !== 0) {
                return 100
            }
            if (this.faceValue200 !== 0) {
                return 200
            }
        }

        getMoney(sum) {
            if (sum > this.getMaxSum()) {
                throw new Error('Not enough money in the ATM.')
            }
            let nominalCount200 = Math.floor(sum / 200)
            let nominalCount100 = Math.floor((sum % 200) * 200 / 100)
            let nominalCount50 = Math.floor(((sum % 200) * 200 % 100 * 100) / 50)
            let nominalCount20 = Math.floor(((sum % 200) * 200 % 100 * 100) % 50 * 50 / 20)
            let nominalCount10 = Math.floor(((sum % 200) * 200 % 100 * 100) % 50 * 50 % 20 * 20 / 10)
            let nominalCount5 = Math.floor(((sum % 200) * 200 % 100 * 100) % 50 * 50 % 20 * 20 % 10 * 10 / 5)

            let getNominal200
            let getNominal100
            let getNominal50
            let getNominal20
            let getNominal10
            let getNominal5

            if (this.faceValue200 > nominalCount200) {
                this.faceValue200 - nominalCount200
                getNominal200 = 200 * nominalCount200
            } else {
                throw new Error('Not enough denominations 200 in the ATM.')
            }
            if (this.faceValue100 > nominalCount100) {
                this.faceValue100 - nominalCount100
                getNominal100 = 100 * nominalCount100
            } else {
                throw new Error('Not enough denominations 100 in the ATM.')
            }
            if (this.faceValue50 > nominalCount50) {
                this.faceValue50 - nominalCount50
                getNominal50 = 50 * nominalCount50
            } else {
                throw new Error('Not enough denominations 50 in the ATM.')
            }
            if (this.faceValue20 > nominalCount20) {
                this.faceValue20 - nominalCount20
                getNominal20 = 20 * nominalCount20
            } else {
                throw new Error('Not enough denominations 20 in the ATM.')
            }
            if (this.faceValue10 > nominalCount10) {
                this.faceValue10 - nominalCount10
                getNominal10 = 10 * nominalCount10
            } else {
                throw new Error('Not enough denominations 10 in the ATM.')
            }
            if (this.faceValue5 > nominalCount5) {
                this.faceValue5 - nominalCount5
                getNominal5 = 5 * nominalCount5
            } else {
                throw new Error('Not enough denominations 5 in the ATM.')
            }

            return document.getElementById('container').innerText = getNominal200 + getNominal100 + getNominal50 + getNominal20 + getNominal10 + getNominal5
        }
    }

    window.onload = function () {
        let atm = new TBankomat()

        function someFunc() {
            let sum = parseInt(document.getElementById('input').value)
            this.getMoney(sum)
            this.toString()
        }

        atm.toString()
        document.getElementById('btn').onclick = justFunc.bind(atm)
        atm.toString()
    }
}
