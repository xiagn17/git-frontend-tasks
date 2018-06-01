let day = parseInt(process.argv[1]);
let monthInString = process.argv[2];
let year = parseInt(process.argv[3]);


let monthes = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
let monthInInt = monthes.indexOf(monthInString);

let dateNow = new Date(year, monthInInt, day);
let dateNextYear = new Date(year + 1, 0, 0);

let differense = dateNextYear.getTime() - dateNow.getTime();
differense = Math.floor(differense / 86400000);

process.stdout.write(differense.toString());