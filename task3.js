let a = parseInt(process.argv[1]);
let b = parseInt(process.argv[2]);

let finalInSecs = a + b;

let secs = finalInSecs % 60;
let mins = Math.floor((finalInSecs / 60)) % 60;
let hours = Math.floor(finalInSecs / 3600);

let firstArray = [1, 21, 31, 41, 51];
let secondArray = [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54];

function outputing() {
    let strSecs = "секунд";
    let strMins = "минут";
    let strHours = "часов";
    if (firstArray.includes(secs)){
        strSecs += "а"
    }
    else if (secondArray.includes(secs)){
        strSecs += "ы";
    }
    if (firstArray.includes(mins)){
        strMins += "а";
    }
    else if (secondArray.includes(mins)){
        strMins += "ы";
    }
    if (firstArray.includes(hours)){
        strHours = "час";
    }
    else if (secondArray.includes(hours)){
        strHours = "часа";
    }

    let outputStr = "";
    if (hours !== 0){
        outputStr += hours.toString() + " " + strHours;
    }
    if (mins !== 0){
        if (outputStr === "") {
            outputStr += mins.toString() + " " + strMins;
        }
        else{
            outputStr += " " + mins.toString() + " " + strMins;
        }
    }
    if (secs !== 0){
        if (outputStr === "") {
            outputStr += secs.toString() + " " + strSecs;
        }
        else{
            outputStr += " " + secs.toString() + " " + strSecs;
        }
    }
    if (secs === 0 && mins === 0 && hours === 0){
        outputStr = "0 секунд";
    }
    return process.stdout.write(outputStr);
}

outputing();

