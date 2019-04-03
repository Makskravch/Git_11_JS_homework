// ДЗ_1
// Задача 1. Дано масив цілих чисел. Кожне від’ємне число замінити на 0.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor((Math.random() - Math.random()) * 100);
    }

    console.log(arr);

    // function negativeToZero(x, i, arr) {
    //     if (x < 0) {
    //         arr[i] = 0;
    //     }
    // }

    arr.forEach((x, i, arr) => (x < 0) ? arr[i] = 0 : x);
    console.log(arr);
}

// Задача 2. Дано масив цін. Сформувати новий масив, який містить тільки ті ціни, які менші за задану.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 100 + 1);
    }

    console.log(arr);

    let randnomNumber = Math.floor(Math.random() * 100);
    console.log(randnomNumber);

    // function ifLess(x) {
    //     return x < randnomNumber;
    // }

    let newArr = arr.filter(x => x < randnomNumber);
    console.log(newArr);
}

// Задача 3. Дано масив цін товарів. Для цін, які менші за 1000грн. додати 20% ціни, для тих, які більші за 1000 грн. відняти 30%.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 2000 + 1);
    }

    console.log(arr);

    // function price1000(x, i, arr) {
    //     if (x < 1000) {
    //         arr[i] = Math.floor(x * 1.2);
    //     }
    //     if (x > 1000) {
    //         arr[i] = Math.floor(x * 0.7);
    //     }
    // }

    arr.forEach((x, i, arr) => x <= 1000 ? arr[i] = Math.floor(x * 1.2) : arr[i] = Math.floor(x * 0.7));
    console.log(arr);
}

// Задача 4. Дано масив імен. Сформувати новий масив, який складається з імен, які починаються на задану літеру.
{
    let nameArray = ["Vasia", "Larysa", "Max", "Misha", "Vania", "Valera", "Lera", "Katia"];

    console.log(nameArray);

    let firstSymbolName = prompt("Enter the first character of the name", "M");

    // function someNameArray(x) {

    //     if (x[0] == firstSymbolName) {
    //         return true;
    //     }
    // }

    let newNameArray = nameArray.filter(x => x[0] === firstSymbolName);
    console.log(newNameArray);
}

// Задача 5. Дано ваги автомобілів на парковці. З’ясувати, чи усі автомобілі є легковими (легшими за 2000 кг).
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 10 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 3000 + 1);
    }

    console.log(arr);

    // function weigher(x) {
    //     return x < 2000;
    // }

    console.log(arr.every(x => x < 2000));

}

// Задача 6. Дано масив, який зберігає кількість відвідувачів протягом тижня. З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10.
{
    let arr = [];

    for (let i = 0; i < 7; i++) {
        arr[i] = Math.floor(Math.random() * 100 + 1);
    }

    console.log(arr);

    // function visitor(x) {
    //     return x < 10;
    // }

    console.log(arr.some(x => x < 10));
}

// Задача 7. Розробити функцію, яка би для довільної кількості переданих символів визначала, кількість букв «а».
{
    let arrCharacters = ["a", "b", "c", "d", "a", "c", "k", "l", "k", "i", "m", "d", "a", "b", "f"];

    // function counterCharacterA() {
    //     let count = 0;

    //     for (let i = 0; i < arguments.length; i++) {

    //         if (arguments[i] == "a" || arguments[i] == "A") {
    //             count++;
    //         }
    //     }

    //     return count;
    // }

    console.log(arrCharacters.reduce((count, x) => (x === "a" || x === "A") ? ++count : count, 0));
}

// Задача 8. Розробити функцію, яка би для довільної кількості чисел знаходила добуток чисел.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 100 + 1);
    }

    console.log(arr);

    // function productNumbers() {
    //     let multiplier = 1;

    //     for (let i = 0; i < arguments.length; i++) {

    //         multiplier *= arguments[i];
    //     }

    //     return multiplier;
    // }

    console.log(arr.reduce((multiplier, x) => multiplier *= x));
}

// Задача 9. Розробити функцію, яка би для довільної кількості чисел знаходила максимальне.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 100 + 1);
    }

    console.log(arr);

    // function maxNumber() {
    //     let max = arguments[0];

    //     for (let i = 1; i < arguments.length; i++) {

    //         if (max < arguments[i]) {
    //             max = arguments[i];
    //         }
    //     }

    //     return max;
    // }

    console.log(arr.reduce((max, x) => (max < x) ? max = x : max));
}

// ДЗ_2
// 1.	Задача. Відсортувати масив імен за останньою літерою.
{
    let nameArray = ["Vasia", "Larysa", "Max", "Misha", "Ivan", "Valera", "Anton", "Katia", "Maksym", "Sergiy"];

    console.log(nameArray);

    // function sortLastCharacter(item1, item2) {

    //     if (item1[item1.length - 1] > item2[item2.length - 1]) {
    //         return 1;
    //     }
    //     if (item1[item1.length - 1] < item2[item2.length - 1]) {
    //         return -1;
    //     }
    //     return 0;
    // }

    console.log(nameArray.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)));
}

// 2.	Задача. Дано масив цін. Для усіх товарів, які дорожчі за 1000грн дати знижку 20% (помножити на 0.8), а для усіх інших товарів – надати 5 % знижки (помножити на 0.95).
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 2000 + 1);
    }

    console.log(arr);

    // function sale(x, i, arr) {
    //     if (x <= 1000) {
    //         return arr[i] = Math.floor(x * 0.95);
    //     }
    //     if (x > 1000) {
    //         return arr[i] = Math.floor(x * 0.8);
    //     }
    // }

    let saleArray = arr.map(x => (x > 1000) ? Math.floor(x * 0.8) : Math.floor(x * 0.95));
    console.log(saleArray);
}

// 3.	Задача. Дано масив років народження працівників. Вивести масив тих, які є призовного віку (менше 25 років).
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 100 + 1);
    }

    console.log(arr);

    // function soldier(x) {
    //     if (x >= 18 && x < 25) {
    //         return x;
    //     }
    // }

    let draftee = arr.filter(x => (x >= 18 && x <= 25) ? x : false);
    console.log(draftee);
}

// 4.	Задача. Дано масив показників гемоглобіну (масив чисел). Сформувати масив тих, які є меншими за 115.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 500 + 1);
    }

    console.log(arr);

    // function hemoglobin(x) {
    //     return x < 115;
    // }

    let hemoglobinLess115 = arr.filter(x => x < 115);
    console.log(hemoglobinLess115);
}

// 5.	Задача. Дано масив цін товарів. Сформувати масив тих, які є меншими за 2000грн.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 4000 + 1);
    }

    console.log(arr);

    // function product(x) {
    //     return x < 2000;
    // }

    let productLess2000 = arr.filter(x => x < 2000);
    console.log(productLess2000);
}

// 6.	Задача. Дано масив цін товарів. Знайти сумарну вартість тих, які знаходяться в межах від 1000 до 2000.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 10 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 4000 + 1);
    }

    console.log(arr);

    // function productSum(sum, x) {
    //     if (x >= 1000 && x <= 2000) {
    //         sum += x;
    //     }
    //     return sum;
    // }

    console.log(arr.reduce((sum, x) => (x >= 1000 && x <= 2000) ? sum += x : sum, 0));
}

// 7.	Задача. Дано масив номерів автомобілів. Сформувати масив тих, які починаються на літеру «А» і закінчуються на літеру «Р».
{
    let licensePlateArray = ["СЕ5676СН", "АК3884АР", "АН2603НХ", "АК2452НН", "ВН2569ЕО", "АН0844АА", "СЕ7694АО", "АМ5368ВО", "АМ2608ВР", "ВЕ3605ВН", "АА5126СР", "АА6172СН",];

    console.log(licensePlateArray);

    // function rule(x) {

    //     if (x.split("")[0] == "А" && x.split("")[x.length - 1] == "Р") {
    //         return x;
    //     }
    // }

    let filterLicensePlateArray = licensePlateArray.filter(x => (x[0] == "А" && x[x.length - 1] == "Р") ? x : false);
    console.log(filterLicensePlateArray);
}

// 8.	Задача. Дано масив літер. Сформувати рядок, який складається тільки з голосних літер.
{
    let characterArray = ["k", "e", "c", "u", "A", "c", "k", "l", "k", "i", "m", "d", "a", "O", "f", "E", "y"];
    console.log(characterArray);

    // function vowels(concat, x) {

    //     if (x == "a" || x == "A" || x == "e" || x == "E" || x == "i" || x == "I" || x == "o" || x == "O" ||
    //         x == "u" || x == "U" || x == "y" || x == "Y") {
    //         concat += x;
    //     }

    //     return concat;
    // }

    let result = characterArray.reduce((str, x) => (x === "a" || x === "A" || x === "e" || x === "E" || x === "i" || 
                                                    x === "I" || x === "o" || x === "O" || x === "u" || x === "U" || 
                                                    x === "y" || x === "Y") ? str += x : str, "");
    console.log(result);
}