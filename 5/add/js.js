

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//


let array = [22,1,0,33,0,6,770,88,99,0,1,0,1]
let nonzero=[]
let zer0 = []
let allItems=[]
function separate(items) {
    for (let i = 0; i < items.length; i++) {
        const arrayElement = items[i];
        if (arrayElement) {
            nonzero += arrayElement + ' '
        } else if (!arrayElement) {
            zer0 += arrayElement + ' '
        }
    }
    return allItems = nonzero+zer0
}

console.log(separate(array))