//Задача взята из прилолжения SoloLearn, курс JavaScript

/*Вы создаете приложение для конвертации валют. Создайте функцию convert, которая
использует два параметра: сумму для конвертации и курс, и возврашает итоговую
сумму.*/
var amount=1050;
var rate=9.4;
console.log(convert(amount,rate));
function convert(amount,rate){
  return amount*rate;
}
