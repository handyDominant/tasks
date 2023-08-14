// 8. На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение)


const obj = {
    1: 'test1',
    2: 'test2',
    3: 'test3'
}

let result = 0;

for (let key in obj) {
    if(obj[key]){
        result++
    }
};

console.log(result);


