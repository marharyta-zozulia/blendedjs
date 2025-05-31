// function foo(a, b, c, d, e) {
//     console.log(arguments);
//     const arr = array.from(arguments);
//     console.log(arr);
// }




// foo(1, 2, 3)
// foo(10,11,12,13,14)




// const add = function (){
//     console.log("add")
// }
// add()





// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().


let number = prompt("Введіть число:");
number = Number(number);
if (number === 10) {
  alert("Вірно");
} else {
  alert("Невірно");
}







// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).



// const styles = ['jazz', 'blues'];

// styles.push('rock-n-roll');
// console, log(styles)

// const index = styles.indexOf('blues');
// console.log(index)
// if (index !== -1) {
//     // styles[index] = 'classic';
//     styles.slice(index, 1, 'classic');
// }


// console.log(styles)
// function logItems(array) {
//     for (let i = 0; i < array.length; i++)
//     console.log(`${i+1} - ${array[i]}`)

// }

// logItems(styles)







// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.



function calculateAverage(...numbers) {
    let sum = 0;
    let count = 0;
    for (const number of numbers) {
        if (typeof number === "number") {
            sum += number;
            count += 1;
       }

    }
    return sum / count;
   
}

console.log(calculateAverage(5, 10, 15, "hello"));


/////////////////////////////////////////////////////////

function calculateAverage(...numbers) {
    let sum = 0;
    const newArray = [];
    for (const number of numbers) {
        if (typeof number === "number") {
            sum += number;
            newArray.push(number);
       }

    }
    return sum / newArray.length;
   
}

console.log(calculateAverage(5, 10, 15, "hello"));







// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
console.log(calculateSum(someArr)) // [33, 45, 39, 17, 25, 27, 29]

function calculateSum(numbers) {
    const sumArray = [];
    for (let i = 0; i < numbers.length - 1; i++){
        sumArray.push(numbers[i] + numbers[i+1])
    }

    return sumArray;

}