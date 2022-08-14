//for (let i= 0; i < 10; i++){
//    console.log('number' + i)
//}

//const animals = ["😺", "🐶","🐭", "🦊", "🐻", "🐼"];

//for (let i = 0; i < animals.length; i++){
//    console.log(animals[i])
//}

//let i = 10;

//while (i > 0) {
//    console.log(`turn number ${i}`);
//    i--;
//}

function calcTip(tip){
    let result;
    if (tip > 300 || tip < 50){
        result = (tip * 15)/100
    } else {
        result = (tip * 20)/100
    }
    return result
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [];
for (let i = 0; i < bills.length; i++) {
    (tips.push (calcTip(bills[i])));
}
console.log(tips);
const total =[];
for (let i = 0; i < bills.length; i++) {
    (tips.push (calcTip(bills[i])));
    total.push (bills[i] + tips[i]);
}
console.log(total);
