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

let num = 50;

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
        continue
    }
    console.log(i)
}