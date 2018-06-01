let ourString = "";

let i = 1;
while (process.argv[i] !== undefined){
    ourString += String(process.argv[i]);
    i++;
}

ourString = ourString.toUpperCase();

let fromStart = [];
let fromTheEnd = [];


for (let i = 0; i < ourString.length; i++){
    if (ourString.charCodeAt(i) >= 65 && ourString.charCodeAt(i) <= 90){
        fromStart.push(ourString[i]);
    }
    if (ourString.charCodeAt(ourString.length - i - 1) >= 65 && ourString.charCodeAt(ourString.length - i - 1) <= 90){
        fromTheEnd.push(ourString[ourString.length - i - 1]);
    }
}

fromTheEnd.reverse();

let checker = true;
for (let i = 0; i < fromStart.length; i++){
    if (fromTheEnd[i] !== fromStart[i]){
        checker = false;
        break;
    }
}

if (checker){
    process.stdout.write("YES");
}
else{
    process.stdout.write("NO");
}
// A - 65, Z - 90, a - 97, z - 122