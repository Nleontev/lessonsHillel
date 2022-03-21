let name = prompt("Введите свое имя! ");
let birthYear = prompt("Введите год своего рождения! ");

if (Number(birthYear) && birthYear <= 2022){
    let age = 2022 - birthYear;
    if (age % 100 >= 11 && age % 100 <= 14){
        confirm(name + ", вам " + age + " лет?")
    }else if (age % 10 === 1 ){
        confirm(name + ", вам " + age + " год?")
    }else if(age % 10 > 1 && age % 10 < 5 ){
        confirm(name + ", вам " + age + " годa?")
    }else{
        confirm(name + ", вам " + age + " лет?")
    }
} else{
    alert('Вы некорректно ввели год рождения!');
}
