
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function ab(a,b){
//     return a*b
// }
//
// console.log('площа прямокутника =', ab(5,6))
// --------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function pr(a){
//     return 2*Math.PI*(a*a)
// }
//
// console.log('площа кола =', pr(5))
// ---------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let z = function(h,r){
//     return 2*Math.PI*(h*r)
// }
//
// console.log('площа циліндру =', z(5, 6))
//-----------------------------------------------------------------------------
//- створити функцію яка приймає масив та виводить кожен його елемент
//
// let arr =[1,2,'true','news',5,55]
//  function showArr(k){
//      for (const items of k) {
//          console.log(items)
//      }
//  }
//
//  showArr(arr)
//-----------------------------------------------------------------------------
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let a ='Lorem ipsum dolor sit amet.';
// function showAr(){
//     document.write(`<p>${arguments}</p>`)
// }
//  showAr(a)
// ----------------------------------------------------------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let li = 'Lorem ipsum dolor sit amet.'
//
// function showLI(){
//     document.write(`<ul>`)
//     document.write(`<li>${arguments}</li>`)
//     document.write(`<li>${arguments}</li>`)
//     document.write(`<li>${arguments}</li>`)
//     document.write(`</ul>`)
// }
// showLI(li)
//---------------------------------------------------------
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let li1 = 'Lorem ipsum dolor sit amet.'
//
// function showLI1(sum,k) {
//     document.write(`<ul>`)
//     for (let j = 0; j < k; j++) {
//         document.write(`<li>${sum}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// showLI1(li1,5)
//------------------------------------------------------------
// - створити функцію яка повертає найменьше число з масиву

// let arr =[34,88,44,56,55]
//
// function minARR(arr2) {
//     let min = arr[0]
//     for (let i = 0; i < arr2.length; i++) {
//         if (min > arr[i]) {
//             min = arr[i]
//         }
//         return min
//     }
// }
//
// console.log(minARR(arr))
//-------------------------------------------
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let arr =[34,88,44,56,55]
//
// function sumARR(arr2) {
//     let sumArray = 0
//     for (let i = 0; i < arr2.length; i++) {
//         sumArray+=arr2[i]
//         }
//         return sumArray
// }
// console.log(sumARR(arr))
//-----------------------------------------------
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let users = [
//     {name: 'vasya', age: 31, id: 123},
//     {name: 'petya', age: 30,id: 6464},
//     {name: 'kolya', age: 29, id: 4665},
//     {name: 'olya', age: 28, id: 4566},
//     {name: 'max', age: 30, id: 4566},
//
// ];
//
//
// function showARG(user) {
//     for (let i = 0; i < user.length; i++) {
//         const user = users[i];
//         document.write(`<div>${user.id} | ${user.name} | ${user.age}</div>`)
//         document.write(`<h4>-----------------</h4>`)
//     }
// }
//
// showARG(users)
//----------------------------------------------
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//
// let elB = ['Lorem', 'ipsum','35',true, 'amet',54]
//
// function showIEMS(elem) {
//     document.write(`<ul>`)
//     for (let j = 0; j <elem.length; j++) {
//         let itemsOF=elem[j]
//         document.write(`<li>${itemsOF}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// showIEMS(elB)