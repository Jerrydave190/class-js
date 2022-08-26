var center = require('center-align');

function factorial(n) {
    if (n == 0) {
        return 1
    } else {
        return n * factorial (n-1)
    }
}

function combination(n, r) {
    let c_val= factorial(n) / (factorial(n-r) * factorial(r));
    return c_val
}

function pascal_t(n){
    let my_str="";
    let val=0;
    for (let j = 0; j <= n; j++) {
        val=combination(n,j);
        my_str +=val.toString() + "     ";
    }
    return my_str
}
console.log(" Printing my pascal triangle    ");

for (let i = 0; i <= 8; i++) {
    //center(val, width);
    console.log(center(pascal_t(i), 100));
}
