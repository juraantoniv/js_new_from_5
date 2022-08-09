
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// let cards = [
//     {cardSuit: 'heart', value: '2', color:'black'  },
//     {cardSuit: 'clubs', value: 'Ace', color:'red'  },
//     {cardSuit: 'clubs', value: '9', color:'red' },
//     {cardSuit: 'clubs', value: 'Ace', color:'black'  },
//     {cardSuit: 'heart', value: '10', color:'black'  },
//     {cardSuit: 'clubs', value: 'Queen', color:'red'  },
//
// ];
//
// let twoColour=cards.reduce((accumulator, card)=>{
//     if(card.color==='black'){
//         accumulator.black.push(card)
//     } else {
//         accumulator.red.push(card)
//     }
//     return accumulator;
// },{ red:[],  black:[] });
//
// console.log(twoColour)


// let cards = [
//     {cardSuit: 'heart', value: '6', color:'black'  },
//     {cardSuit: 'clubs', value: 'Ace', color:'red'  },
//     {cardSuit: 'clubs', value: 10, color:'red' },
//     {cardSuit: 'clubs', value: 'Ace', color:'black'  },
//     {cardSuit: 'heart', value: 10, color:'black'  },
//     {cardSuit: 'clubs', value: 'Queen', color:'red'  },
//
// ];

// - знайти піковий туз
// //
// // let filteredCards = cards.filter(value => value.cardSuit === 'heart' && value.value === 'Ace');
// // console.log(filteredCards);

// - всі шістки
//
// let filteredCards = cards.filter(value => value.value === '6');
// console.log(filteredCards);

// - всі червоні карти
//
// let filteredCards = cards.filter(value => value.color === 'red');
// console.log(filteredCards);

// - всі буби

// let filteredCards = cards.filter(value => value.cardSuit === 'clubs');
// console.log(filteredCards);

// - всі трефи від 9 та більше

// let filteredCards = cards.filter(value => value.value > 9);
// console.log(filteredCards);


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration
//
// let sort = coursesAndDurationArray.sort((u1, u2) => {
//     return u2.monthDuration - u1.monthDuration;
// });
//
// console.log(sort);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filterAbd = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filterAbd);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
//
// let arrFunk = arr.map(function (value) {
//     return {item:value.toString()};
// });
// console.log(arrFunk);

let nums = [11,21,3];

// sortNums(nums,'ascending') // [3,11,21]

let sortNums = nums.sort((u1, u2) => {
    return u2 - u1;
});

console.log(sortNums);


// sortNums(nums,'descending') // [21,11,3]

let sortNums = nums.sort((u1, u2) => {
    return u1 - u2;
});


console.log(sortNums);