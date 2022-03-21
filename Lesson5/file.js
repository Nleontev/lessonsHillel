function getRandomString(length) {
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length),
      );
    }
    return result;
  } 

const generateObject = (str) =>{
    let obj = {};
    for(i=0; i<str.length; i++){
        let someText = getRandomString(3);
        obj[someText] = str.slice(0,i + 1);
    }
    return obj;
}

console.log(generateObject('abrakadabra'));

const getStringFromObject = (obj) =>{
    let oldStr = '';
    for (key in obj){
        if (obj[key] !== undefined){
            oldStr = obj[key]
        }else{
            break;
        }
    }
    return oldStr;
}

let exampleObj = generateObject('abrakadabra');
let exampleStr = getStringFromObject(exampleObj)

alert(exampleStr);
