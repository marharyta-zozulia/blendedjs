// let result;

// result = alert('')
// result = confirm('')
// result = promt('')

// console.log(result)



// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

// Запропонуйте користувачу ввести число





// let number = Number(prompt("Введіть число:"));


// if (number === 10) {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }
// console.log(number)





// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min < 15) {
//     alert(`${min} входить в першу чверть`)

// } else if (min >= 15 && min < 30) {
//     alert(`${min} входить в другу чверть`)
// } else if (min >= 30 && min < 45) {
//     alert(`${min} входить в третю чверть`)
// }else  {
//     alert(`${min} входить в четверту чверть`)
// }

// '' 
// ""
// ``






// Отримуйте від користувача число (// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples



// const totalMinutes = prompt(введіть кількість хвилин)

// console.log(formatTime(totalMinutes))



// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const modifiedHours = String(hours).padStart(2, '0')
//     const minutes = totalMinutes % 60;
//     const modifiedMinutes = String(minutes).padStart(2, '0')

//     return `${modifiedHours}:${modifiedMinutes}`
    
// }







// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.




function getNumbers(min, max) {
    let total = 0;
    for (let i = max; i >= min; i--){
        console.log(i)
        if (i % 2 === 0) {
            total += i;
        }

    }
    return total;

}


console.log (getNumbers(30, 50));