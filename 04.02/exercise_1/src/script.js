// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
{
    let arr = ["sdfjsdjkgh", "xcvbbm kjhdfg2", "dffgd", "dfkjgh cvboisd njdfg", "sdfgh3 2jh", "123sdf123", "d5f5g4g4h7"];
    let reg = /[0-9]/;
    // let reg = /\d/;

    let numberArray = arr.filter(x => reg.test(x));

    console.log(numberArray);
}

// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
{
    let arr = ["sdfjsdjkgh", "xcvbbm kjhdfg2", "dffgd", "dfkjgh cvboisd njdfg", "sdfgh3 2jh", "123sdf123", "d5f5g4g4h7"];
    let reg = /\d/;

    let numberArray = arr.filter(x => !reg.test(x));

    console.log(numberArray);
}

// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
{
    let arr = ["sdfOsdjkgh", "xcvabbm kjhdfg2", "dffgd", "dfkjgh cvboisd njdfg", "sdfgh3 2jh", "123sdf123", "d5f5g4g4h7"];
    let reg = /[aeouiy]/i;

    let vowelsArray = arr.filter(x => reg.test(x));

    console.log(vowelsArray);
}

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
{
    let arr = ["sdfOsdjkgh", "xcvabbm kjhdfg2", "dffgd", "dfkjgh cvboisd njdfg", "sdfgh3 2jh", "123sdf123", "d5f5g4g4h7"];
    let reg = /[aeouiy]/i;

    let vowelsArray = arr.filter(x => !reg.test(x));

    console.log(vowelsArray);
}

// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
{
    let arr = ["sdfOsdjkgh", "xcva1bbm kjhdfg2", "dffgd", "dfkjgh cvboisd njdfg", "sdfgh3 2jh", "123sdf123", "d5f5g4g4h7"];
    let reg = /[13]/;

    let numArray = arr.filter(x => reg.test(x));

    console.log(numArray);
}

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
{
    let str = "Donec 123sagittis cursus 1elit, et varius 12 leo tempor vel. Maecenas 55 nunc nisl, condimentum sit amet mi 2ac, 46auctor euismod enim.";
    let reg = /\d+/g;

    let result = str.match(reg);

    console.log(result);
}

// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
{
    let str = "Donec 123sagittis, 'cursus' - 1elit. Et varius 12 leo tempor vel?!";
    let reg = /\W/g;

    let result = str.match(reg);

    console.log(result);
}

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
{
    let str = "Donec 123sagittis, 'cursus' - 1elit. Et varius 12/3 leo tempor vel?!?";
    // let reg = /\W/g;

    // let withoutLetters = str.match(reg);
    // console.log(withoutLetters);

    // let filterWithoutLetters = withoutLetters.filter(x => x !== " ");
    // console.log(filterWithoutLetters);

    // let result = filterWithoutLetters.map(x => str.split(x));
    // console.log(result);

    let reg = /(?=\W)\S|\W$/g;
    let withoutLetters = str.match(reg);
    console.log(withoutLetters);

    let result = withoutLetters.map(x => str.split(x));
    console.log(result);
}

// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
{
    let str = "Donec 123sagittis, 10.08.2019 'cursus' - 1elit. Et 8.09.1988 varius 12 leo tempor vel?!";
    let reg = /\b\d\d?\.\d{2}\.\d{4}\b/g;

    let result = str.match(reg);
    console.log(result);
}

// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
{
    let str = "Donec 12 3sagittis, 10.08.2019 'cursus' - 1elit. Et 8.09.1988 varius 12 leo tempor456 65 vel?!";
    let reg = /\b\d{2}\b/g;

    let result = str.match(reg);
    console.log(result);
}