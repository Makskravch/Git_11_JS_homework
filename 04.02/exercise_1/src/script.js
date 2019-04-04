// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
{
    let arr = ["sdfjsdjkgh", "xcvbbm kjhdfg2", "dffgd", "dfkjgh cvboisd njdfg", "sdfgh3 2jh", "123sdf123", "d5f5g4g4h7"];
    let number = /[0-9]/;
    // let number = /\d/;

    let numberArray = arr.filter(x => number.test(x));

    console.log(numberArray);
}

// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
{
    let arr = ["sdfjsdjkgh", "xcvbbm kjhdfg2", "dffgd", "dfkjgh cvboisd njdfg", "sdfgh3 2jh", "123sdf123", "d5f5g4g4h7"];
    let number = /[0-9]/;

    let numberArray = arr.filter(x => !number.test(x));

    console.log(numberArray);
}

// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
{
    let arr = ["sdfOsdjkgh", "xcvabbm kjhdfg2", "dffgd", "dfkjgh cvboisd njdfg", "sdfgh3 2jh", "123sdf123", "d5f5g4g4h7"];
    let vowels = /[aeouiy]/i;

    let vowelsArray = arr.filter(x => vowels.test(x));

    console.log(vowelsArray);
}

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
{
    let arr = ["sdfOsdjkgh", "xcvabbm kjhdfg2", "dffgd", "dfkjgh cvboisd njdfg", "sdfgh3 2jh", "123sdf123", "d5f5g4g4h7"];
    let vowels = /[aeouiy]/i;

    let vowelsArray = arr.filter(x => !vowels.test(x));

    console.log(vowelsArray);
}

// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
{
    let arr = ["sdfOsdjkgh", "xcva1bbm kjhdfg2", "dffgd", "dfkjgh cvboisd njdfg", "sdfgh3 2jh", "123sdf123", "d5f5g4g4h7"];
    let num = /[13]/;

    let numArray = arr.filter(x => num.test(x));

    console.log(numArray);
}

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
{
    let str = "Donec 123sagittis cursus 1elit, et varius 12 leo tempor vel. Maecenas 55 nunc nisl, condimentum sit amet mi 2ac, 46auctor euismod enim.";
    let num = /[0-9]/g;

    let result = str.match(num);

    console.log(result);
}

// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
{
    let str = "Donec 123sagittis, 'cursus' - 1elit. Et varius 12 leo tempor vel?!";
    let symbol = /\W/g;

    let result = str.match(symbol);

    console.log(result);
}

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
{
    let str = "Donec 123sagittis, 'cursus' - 1elit. Et varius 12 leo tempor vel?!";
    let symbol = /\W/g;

    let result = str.match(symbol);

    console.log(result);

    let filterResult = result.filter(x => x !== " ");
    console.log(filterResult);

    let lastArr = filterResult.map(x => str.split(x));
    console.log(lastArr);
}

// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
{

}

// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
{
    
}