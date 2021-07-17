//Задача взята из прилолжения SoloLearn, курс JavaScript


/*Вы работаете над приложением Менеджер контактов. Вы создали объект-конструктор
contact с двумя аргументами name и number. Вам необходимо добавить метод print()
к объекту, который выведет контактные данные в консоль в формате: name:number
Данный код объявляет два обекта и вызывает их методы print(). Завершите код,
определив метод print() для объектов.*/
function contact(name,number){
  this.name=name;
  this.number=number;
  this.print=print2;
}
function print2(){
  console.log(this.name+": "+this.number);
}
var a=new contact("David",12345);
var b=new contact("Amy", 987654321);
a.print();
b.print();
