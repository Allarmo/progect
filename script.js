let num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("A lot of");
} else {
    console.log("It`s true");
};

(num == 50) ? console.log("It`s true") : console.log("Error");

switch (num) {
    case num < 49:
        console.log("Error");
        break;
    case num > 100:
        console.log("A lot of");
        break;
    case num > 80:
        console.log("A lot of");
        break;
    case 50:
        console.log("It`s true");
        break;
    default:
        console.log("System error...");
        break;
}

//let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (numm < 55);   //Когда мы хотим что то сделать, а заем проверить это

for (let i = 1; i <= 8; i++) {
    if (i == 6){
        continue;
    }
    console.log(i)
}


//Функции
// let num = 20;

// function showFirstMessage (text) { //По не гласному правилу функция должна быть глаголом
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello word!");
// console.log(num);

// function calc(a,b) {
//     return  (a + b);
// }

// console.log(calc(3,4));

// console.log(calc(8,4));

// function retVar () {
//     let nun = 50;
//     return nun;
// }

// let anotherNum = retVar();
// console.log(anotherNun);




// // let calc = functiom(a,b) {
// //     return (a + b);
// // }

// let calc = (a,b) => (a + b);

// console.log(calc(3,4));

// console.log(calc(8,4));



let str = "test";
console.log(str.length);

console.log(str.toUpperCase()); //Переводит в верхний регистр
console.log(str.toLowerCase()); //Переводит в нижний регистр


let twelve = "12.2px";

//console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));

