// 9. На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение) где значение число и вывести количество


const staticObject = {
    key1: 42,
    key2: "value",
    key3: 123,
    key4: "another value",
};

let count = 0;

for (let key in staticObject) {
    if (typeof staticObject[key] === 'number') {
        count++
    }
}
console.log(`Количество пар (ключ: значение) с числовыми значениями: ${count}`);
