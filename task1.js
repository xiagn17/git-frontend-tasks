var ourString = "";

var i = 2;
while (process.argv[i] !== undefined){
    ourString += String(process.argv[i]);
    i++;
}

var start = 0;
var end = ourString.length - 1;

var checker = true;

while (start <= end){

    var startAscii = ourString.toUpperCase().charCodeAt(start);
    while (startAscii < 65 || startAscii > 90){
        start++;
        startAscii = ourString.toUpperCase().charCodeAt(start);
    }

    var endAscii = ourString.toUpperCase().charCodeAt(end);
    while (endAscii < 65 || endAscii > 90){
        end--;
        endAscii = ourString.toUpperCase().charCodeAt(end);
    }

    if (ourString.toUpperCase()[start] === ourString.toUpperCase()[end]){
        start++;
        end--;
    }
    else{
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