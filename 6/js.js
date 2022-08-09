
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


let cards = [
    {cardSuit: 'heart', value: '2', color:'black'  },
    {cardSuit: 'clubs', value: 'Ace', color:'red'  },
    {cardSuit: 'clubs', value: '9', color:'red' },
    {cardSuit: 'clubs', value: 'Ace', color:'black'  },
    {cardSuit: 'heart', value: '10', color:'black'  },
    {cardSuit: 'clubs', value: 'Queen', color:'red'  },

];

let twoColour=cards.reduce((accumulator, card)=>{
    if(card.color==='black'){
        accumulator.black.push(card)
    } else {
        accumulator.red.push(card)
    }
    return accumulator;
},{ red:[],  black:[] });

console.log(twoColour)


let cards = [
    {cardSuit: 'heart', value: '2', color:'black'  },
    {cardSuit: 'clubs', value: 'Ace', color:'red'  },
    {cardSuit: 'clubs', value: '9', color:'red' },
    {cardSuit: 'clubs', value: 'Ace', color:'black'  },
    {cardSuit: 'heart', value: '10', color:'black'  },
    {cardSuit: 'clubs', value: 'Queen', color:'red'  },

];