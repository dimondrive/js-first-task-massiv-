//Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива.
// function removeItem(arr,num){
//     let list=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!=num){
//             list.push(arr[i]);
//         }
//     }
//     return list;
//     return arr.filter(item=>item!=num);
// }
// console.log(removeItem([1,5,3,4,5],5));

// Вернуть случайный элемент из массива
// Напишите функцию randomElement(arr), которая возвращает случайный элемент из массива.
// function randomElement(arr){
//     return arr[Math.floor(Math.random()*arr.length)]
// }
// const list=[1,2,3,4,5,6];
// console.log(randomElement(list))

// Массив с заданным количеством элементов
// Напишите функцию arrayFilled(len, value), которая возвращает массив с заданным количеством len элементов value.
// function arrayFilled(len,value){
//     const arr=new Array(len);
//     return arr.fill(value);
//     return new Array(len).fill(value);
// }
// console.log(arrayFilled(5,2));

// const numbers=[2, 3, 5, 7, 11, 13, 17];

// const currentSums=numbers=>numbers.reduce((accum,item)=>{
//     return accum+item;
// },0);
// console.log(currentSums(numbers));



// let str= "Каждый охотник желает знать, где сидит фазан.";

// function firstLetter(stroka){
//     return stroka.split(' ').map((value)=>value.charAt(0)).join();
// }
// console.log(firstLetter(str))


// const list=['Капуста', 'Репа', 'Редиска', 'Морковка'];

// console.log(list.toString());

// console.log(list.join());


// const str = 'КаЖдЫй ОхОтНиК';

// function changeRegister(stroka){
//     return [...stroka].map(item=>item==item.toUpperCase()?item.toLowerCase():item.toUpperCase()).join('');
// }
// console.log(changeRegister(str));