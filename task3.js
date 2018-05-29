var a = parseInt(process.argv[2]);
var b = parseInt(process.argv[3]);

var finalInSecs = a + b;

var secs = finalInSecs % 60;
var mins = Math.floor((finalInSecs / 60)) % 60;
var hours = Math.floor(finalInSecs / 3600);

var firstArray = [1, 21, 31, 41, 51];
var secondArray = [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54];

function outputing() {
    var strSecs = "секунд";
    var strMins = "минут";
    var strHours = "часов";
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

    var outputStr = "";
    if (hours != 0){
        outputStr += hours + " " + strHours;
    }
    if (mins != 0){
        if (outputStr === "") {
            outputStr += mins + " " + strMins;
        }
        else{
            outputStr += " " + mins + " " + strMins;
        }
    }
    if (secs != 0){
        if (outputStr === "") {
            outputStr += secs + " " + strSecs;
        }
        else{
            outputStr += " " + secs + " " + strSecs;
        }
    }

    return process.stdout.write(outputStr);
}

outputing();
