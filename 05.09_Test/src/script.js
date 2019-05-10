// Задача 1. Дано оцінки учня за 5 предметів у 12 бальній шкалі.  Вивести номери предметів, з яких у учня трійки?
{
    let ratingArr = [1, 2, 3, 4, 5]
    ratingArr.filter((x, i) => {
        if (x === 3) {
            alert(i);
        }
    })
}
// Задача 2. Користувач вводить 10 слів. Підрахувати кількість слів, у яких перша літера і остання літера однакові.
{
    let wordArr = ['adhfjghfya', 'fjghfbvnfhdy', 'bjfhgyfhfhb', 'gdtfhshdkfl', 'uahsgdysua']
    let wordCount = wordArr.reduce((count, x) => {
        if (x[0] === x[x.length - 1]) {
            count++;
        }
        return count
    })
    alert(wordCount)
}
// Задача 3. Дано послідовність чисел, які згенеровано випадковим чином. Сформувати новий масив, у якому елементи є більшими за перший елемент.
{
    let numArr = []
    for (let i = 0; i < 10; i++) {
        let rand = Math.floor(Math.random() * 100)
        numArr.push(rand)
    }
    let newArr = numArr.filter((x, i, arr) => x > arr[0])
}
// Задача 4. Усі елементи введеного масиву помножити на 17. 
{
    let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    numArr.forEach((x, i, arr) => arr[i] *= 17)
}
// Задача 5. Знайти суму елементів, які знаходяться після елемента зі значенням 78.
{
    let numArr = [2, 54, 66, 32, 78, 12, 99, 2, 18, 4]
    let mark = false
    let sumSomeElements = numArr.reduce(function (sum, x) {
        if (mark) {
            sum += x
        }
        if (x == 78) {
            mark = true
        }
        return sum
    }, 0)
    alert(sumSomeElements)
}

// Задача. Створити клас «Тренажер арифметичних операцій»
// Випадковим чином генеруємо :
// - перше число;
// - друге число;
// - операцію, яку треба виконати.
// Користувач вводить свій варіант відповіді і натискає на «Check». Після перевірки користувачу виводиться результат.
{
    class SimulatorArithmeticOperations {
        constructor() {
            this.firstNumber = Math.floor(1 + Math.random() * 10)
            this.secondNumber = Math.floor(1 + Math.random() * 10)
            this.operationType = Math.floor(Math.random() * 4)
            this.answerInput
            this.resultSpan
        }

        onClick() {
            let result
            switch (this.operationType) {
                case 0:
                    result = this.firstNumber + this.secondNumber
                    break;
                case 1:
                    result = this.firstNumber - this.secondNumber
                    break;
                case 2:
                    result = this.firstNumber * this.secondNumber
                    break;
                case 3:
                    result = this.firstNumber / this.secondNumber
                    break;
            }
            if (result == this.answerInput.value) {
                this.resultSpan.innerText = 'Result: True'
            } else
                this.resultSpan.innerText = 'Result: False'
        }

        render(containerId) {
            let div = document.getElementById(containerId)
            let firstNumSpan = document.createElement('span')
            firstNumSpan.innerText = `First number: ${this.firstNumber}`
            div.appendChild(firstNumSpan)
            let operationSpan = document.createElement('span')
            switch (this.operationType) {
                case 0:
                    operationSpan.innerText = `Operation: +`
                    break;
                case 1:
                    operationSpan.innerText = `Operation: -`
                    break;
                case 2:
                    operationSpan.innerText = `Operation: *`
                    break;
                case 3:
                    operationSpan.innerText = `Operation: /`
                    break;
            }
            div.appendChild(operationSpan)
            let secondNumSpan = document.createElement('span')
            secondNumSpan.innerText = `Second number: ${this.secondNumber}`
            div.appendChild(secondNumSpan)
            //----------
            let answerSpan = document.createElement('span')
            answerSpan.innerText = 'Your answer: '
            this.answerInput = document.createElement('input')
            this.answerInput.type = 'number'
            answerSpan.appendChild(this.answerInput)
            div.appendChild(answerSpan)
            let button = document.createElement('button')
            button.innerText = 'Check'
            button.onclick = this.onClick.bind(this)
            div.appendChild(button)
            this.resultSpan = document.createElement('span')
            this.resultSpan.innerText = 'Result:'
            div.appendChild(this.resultSpan)
        }
    }

    window.onload = function () {
        let simulator = new SimulatorArithmeticOperations()
        simulator.render('container')
    }
}