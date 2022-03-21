// Первое задание
let number;
let result = 0;

    number = +prompt("Выберите число от одного до 100");
    if(Number.isInteger(number) && number > 0 && number <= 100){ 
        for(i = 1; i <= number; i++){
            if((i === number || i === number - 1) && i % 2 === 0){
                result = result + i;
            }
            else if(i % 2 === 0){
                result = result + i + ',';
            }
             
        }
         alert("Результат: " + '"' + result + '"');
        
    }else{
        alert("Вы ввели некорректно, попробуйте еще раз!");
    }
