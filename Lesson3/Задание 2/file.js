// Второе задание
let summary = 0;

while(summary !== 7){
    summary = +prompt(" Какая сумма выражения 3 + 4 = ?");
    if (summary === 7){
        alert("Вы истинный математик!");
    }else{
        alert("Попробуй еще раз!");
    }
}