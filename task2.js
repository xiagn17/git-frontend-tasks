var day = parseInt(process.argv[2]);
var monthInString = process.argv[3];
var year = parseInt(process.argv[4]);

var february = 28;
if (year % 4 === 0) {
    february = 29;
}
var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var monthes = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

var month = -1;
for (var i = 0; i < 12; i++){
    if (monthes[i] === monthInString){
        month = i;
    }
}

var sum = 0;
for (var i = month + 1; i < 12; i++){
    sum += daysInMonth[i];
}

sum += daysInMonth[month] - day;

process.stdout.write(String(sum));