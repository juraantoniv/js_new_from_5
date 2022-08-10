






//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню


let books = [
    {name: 'Some B;kvnook', pages: 200, autors: ['somename', 'name', 'name', 'name'], ganre: 'aifusdgf'},
    {name: 'Some Bookd', pages: 300, autors: ['somename', 'name', 'name', 'name', 'name'], ganre: 'aifusdgf'},
    {name: 'Some Boo;dsk', pages: 400, autors: ['somename'], ganre: 'aifusdgf'},
    {name: 'Some Book ;ldg d;', pages: 500, autors: ['somename', 'name', 'name'], ganre: 'aifusdgf'},
    {name: 'Some Boo[sdfk', pages: 100, autors: ['somename', 'name',], ganre: 'aifusdgf'},
    {name: 'Some Boolsdfk', pages: 250, autors: ['somename', 'name', 'name'], ganre: 'aifusdgf'}
]


// -знайти наібльшу книжку.

// let max =function (items){
//     let max=items.pages[0]
//     if (max>items.pages){
//         max=items.pages
//     }
//
//     return max
// }
//
//  books.forEach(max)
//
// console.log(max)


//
// let max = books.filter(value => Math.max(value.pages))
// console.log(max)

//--------------------------------------------------------------------

// coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// console.log(coursesArray.sort((a, b) => {
//     if (a.modules.length < b.modules.length) {
//         return 1;
//     }
//     if (a.modules.length > b.modules.length) {
//         return -1
//     }
//     if (a.modules.length === b.modules.length) {
//         return 0
//     }
// }));

//--------------------------------------------

//     - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let str = "HTML JavaScript PHP"
//
// function insert_dash(str1){
//   let s1= str1.replaceAll(' ','-')
//     return s1.toUpperCase()
//
//
// }
//
// console.log(insert_dash(str));

//---------------------------------------------

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let sortA = function (n){
    let empty =[]
    for (let i = 0; i < n; i++) {
        empty.push(Math.round(Math.random()*100))
        empty.sort()

    }
     return console.log(empty)
}

sortA(25)