function summary(x, y){
    return x + y;
}

function operation(a,b,sumCallback){
    a *= a;
    b *= b;
    return sumCallback(a, b);
}

alert(operation(2, 9, summary));