// Третье задание

let number = +prompt("Введите число от 0 до 60!")
switch(number > 0){
    case number <= 15:
        alert('В первую четверть.')
        break;
    case number <=30:
        alert('Во вторую четверть.')
        break;
    case number <=45:
        alert('В третью четверть.')
        break;
    case number <=60:
        alert('В четвертую четверть.')
        break;
    default:
        alert('Вы ввели некорректные данные!')
}