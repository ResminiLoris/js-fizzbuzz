
for (var i = 1; i <= 100; i++) {
    var stampa = i;
    if (i % 3 == 0){
        stampa = "fizz";
    }
    if (i % 5 == 0){
        stampa = "buzz";
    }
    if (i % 3 == 0 && i % 5 == 0 ){
        stampa = "fizzbuzz";
    }
    console.log(stampa);
}
