// 4. На входе статичный объект. Необходимо вывести все четные значения объекта.


const obj = {
    1: 'test1',
    test2: 2,
    3: 'test3'
};

for(let key in obj) {
    if(obj[key] % 2 ==0) {
        console.log(obj[key])
    }
};