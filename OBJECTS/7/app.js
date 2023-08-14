// 7. На вход статичный объект. Необходимо объект проверить на пустоту. Если же
// объект пустой, то выводим false, если же содержит хотя бы одну пару (ключ:
// значение), то true



const obj = {
    1: '',
    2: '',
    3: 'test1'
}

let count = 0;

for (let key in obj) {
    if (key) {
        count++
    }
} if(count === 0){
    console.log('False');
}else{
    console.log('True')

}