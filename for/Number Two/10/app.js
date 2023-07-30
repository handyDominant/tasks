// 10. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите только уникальные
// значения массива -> [1, 5] (for)


let inputUser = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let newListInputUser = 0;
let clearItemsInputUser = [];

for (newListInputUser of inputUser){
    if (newListInputUser === 1 || newListInputUser === 5){
        clearItemsInputUser.push(newListInputUser);

    }
}
console.log(clearItemsInputUser);
