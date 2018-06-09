let ourString = "";

let i = 2;
while (process.argv[i] !== undefined){
    ourString += String(process.argv[i]);
    i++;
}

ourString = ourString.toUpperCase();

let fromStart = [];
let fromTheEnd = [];

let k = ourString.length - 1;
while (k !== -1){
    if (ourString.charCodeAt(k) < 65 || ourString.charCodeAt(k) > 90){
        let str_helps = ourString;
        ourString = "";
        for (let i = 0; i < ourString.length - 1; i++){
            ourString += str_helps[i];
        }
        k--
    }
    else{
        k = -1;
    }
}

for (let i = 0; i < ourString.length; i++){
    fromStart.push(ourString[i]);
    fromTheEnd.push(ourString[ourString.length - 1 - i]);
}

fromTheEnd.reverse();

let checker = true;
if (fromStart.length !== fromTheEnd.length){
    checker = false;
}
else{
    for (let i = 0; i < fromStart.length; i++){
        if (fromTheEnd[i] !== fromStart[i]){
            checker = false;
            break;
        }
    }
}



if (checker){
    process.stdout.write("YES");
}
else{
    process.stdout.write("NO");
}
// A - 65, Z - 90, a - 97, z - 122



