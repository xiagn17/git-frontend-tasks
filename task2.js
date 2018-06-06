let day = parseInt(process.argv[2]);
let monthInString = String(process.argv[3]);
let year = parseInt(process.argv[4]);


let monthes = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
let monthInInt = monthes.indexOf(monthInString);

let daysInFebruary = 28;
if (year % 4 === 0){
    daysInFebruary = 29;
}
let daysInMonth = [31, daysInFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let sum = 0;
for (let i = monthInInt + 1; i < 12; i++){
    sum += daysInMonth[i];
}

sum += daysInMonth[monthInInt] - day;

process.stdout.write(sum.toString());