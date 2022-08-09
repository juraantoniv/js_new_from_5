

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//

// let array = [22,1,0,33,0,6,770,88,99,0,1,0,1]
// let nonzero=[]
// let zer0 = []
// let allItems=[]
// function separate(items) {
//     for (let i = 0; i < items.length; i++) {
//         const arrayElement = items[i];
//         if (arrayElement) {
//             nonzero += arrayElement + ' '
//         } else if (!arrayElement) {
//             zer0 += arrayElement + ' '
//         }
//     }
//     return allItems = nonzero+zer0
// }
//
// console.log(separate(array))
//---------------------------------------------------------------
// Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let a = 30
// let b = 15
//
// if (a<b) {
//     for (let i = a; a <=b; a++) {
//         console.log(a)
//     }
// } else {
//     for (let i = a; a >=b; a--) {
//         console.log(a)
//     }
// }
//------------------------------------------------------------------
//- Дано натуральное число n. Выведите все числа от 1 до n.

// let n = 25
// for (let i = 1; i <=n; i++) {
//     console.log(i)
//
// }
//---------------------------------------------------------------------------
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let  min =(a,b,c) =>{
//     if(a>b && b>c){
//         console.log('C')
//     } else if (c>b && b>a){
//         console.log('A')
//     } else {
//         console.log('B')
//     }
// }
//
// min(100,50,55)
//---------------------------------------------------------------------------
//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let  max =(a,b,c) =>{
//     if(a>b && a>c){
//         console.log('A')
//     } else if (c>b && c>a){
//         console.log('C')
//     } else {
//         console.log('B')
//     }
// }
//
// max(100,255,255)
//
//
// let k = [1,'cos',3,'trr', 'cos1111',[1,'stop'],'cos','sport',5,6,88]
// let all=[]
//
// for (let i = 0; i < k.length; i++) {
//     getItems(k)
//     for (let j = 0; j < k.length; j++) {
//         const kElement = k[j];
//         all.push(getItems())
//     }
//     console.log(all)
// }
//
//
//
// function getItems(item) {
// let p =[]
//     for (let i = 0; i < item.length; i++) {
//         const item1 = item[i];
//         if (typeof item1 === 'string') {
//             p.push(item1)
//         }
//     }
//     return p
// }




//
//
//
// let a =[5,6,7,8,9,10,11]
// let b =[15,16,17,18,19,20,21]
//
// for (let i = 0; i < b.length; i++) {
//     const bElement = b[i];
//     a.push(bElement)
// }
//
//
// let sum =[]
//
// for (let i = 0; i < a.length/2; i++) {
//   sum.push( a[i]+a[Math.round((a.length/2))+i])
//     console.log(sum[i])
// }
//
//
// let  k = [7,8,[54,'spot',[1,'spot2',[55,'spot3'],],'spot4'],5,[1,2],6]
// // let words =[]
// for (const kElement of k) {
//     if( Array.isArray(kElement)){
//         console.log(kElement.length)
//     }
// }

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },

];


let red=products.reduce((accumulator, user)=>{
    if(user.price>20){
        accumulator.one1.push(user)
    } else {
        accumulator.one2.push(user)
    }
return accumulator;
},{ one1:[], one2:[]});

console.log(red)




// function filter(array,prducatedFN){
//     let empty =[]
//     for (const arrayElement of array) {
//         if(prducatedFN(arrayElement)) {
//             empty.push(arrayElement)
//         }
//
//     }
//     return empty
//
// }
//
// console.log(filter(products,(item)=>item.price>20))

// let prod=products.filter(value =>value.title.length>4 )
// console.log(prod)

