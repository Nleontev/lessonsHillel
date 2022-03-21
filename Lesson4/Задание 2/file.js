function repeat(str = '', n = 2){
    let word = str;
    for(i = 1; i < n; i++){
        str += word;
    }
    return str;
}

let fullStr = repeat('aWAo', 7);
alert(fullStr);