var cpNumbers = new Array(100);
for (var i = 0; i < 100; i++) {
    cpNumbers[i] = i + 1; 
}

for (var i = 0; i < cpNumbers.length; i++) {
    console.log(cpNumbers[i]);
    if (i % 3 == 0){
        i = "fizz";
    }
}