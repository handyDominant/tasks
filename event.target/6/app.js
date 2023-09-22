// Записать в результат удвоенное значение инпута. Добавить проверки 

const doubleValueButton = document.getElementById('doubleValueButton');
const myInput = document.getElementById('myInput');


try {
    if (isNaN(myInput.value)) {
        throw new Error('Пожалуйста, введите число!');
    }

    doubleValueButton.addEventListener('click', function() {
        const inputValue = parseInt(myInput.value);
        const doubledValue = inputValue * 2;
        console.log(doubledValue);
    });

} catch (error) {
    console.error(error.message);
}















