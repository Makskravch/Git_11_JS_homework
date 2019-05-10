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
        if (x[0].toLowerCase() === x[x.length - 1].toLowerCase()) {
            count++;
        }
        return count
    }, 0)
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