//Задачи взяты из прилолжения SoloLearn, курс JavaScript


/*Данный класс представляет собой куб, с заданной длиной, шириной и высотой.
Завершите программу для вычисления и вывода в консоль объема данного куба.*/
var cuboid={length: 25,width: 50, height: 200};
var v=cuboid.length*cuboid.width*cuboid.height;
console.log(v);

/*Боб-пресс-секретарь аэропорта, он отвечает за информирование о статусе рейсов.
Давайте поможем Бобу! Завершите данную программу: исправьте конструктор, создайте
объект для рейса и назначьте его на данную переменную для правильного вывода
соответвующего сообещния. Номер и статус рейса(приземлился, по расписанию,
задерживается и т.п.) используется в качестве вводных данных.*/
var flightNumber="NGT786";
var flightStatus="on time";
var flight1=new Flight(flightNumber,flightStatus);
console.log("The flight "+flight1.number+"is "+flight1.status);
function Flight(number,status){
  this.number=number;
  this.status=status;
};

/*Директору магазина нужна программа для расчета скидки на товары. Данная
программа правильно создает объект товара с его номером и ценой в качестве
свойтв, но метод, который должен определять скидку, не завершён. Исправьте его!
Номер товара, его цена и размер скидки принимаются в качестве вводных данных.*/
var prodID="MN1480";
var price=1700;
var discount=15;
var prod1=new Product(prodID,price);
console.log(prod1.prodID+" price: "+prod1.price);
prod1.changePrice(discount);
console.log(prod1.prodID+" new price: "+prod1.price);

function Product(prodID,price){
  this.prodID=prodID;
  this.price=price;
  this.changePrice=function(discount){
    this.price=price-(price*discount/100);
  }
}

/*Данная програама должна вычитать годовой доход по займу. Она должна
соответвующим образом использовать в качестве вводных данных сумму займа и
годовую процентную ставку, а затем создать заем в качестве объекта.*/
var amount=220000;
var yearPercent=15;
var loan1=new Loan(amount,yearPercent);
console.log(loan1.yearIncome());

function Loan(amount,percent){
    this.amount=amount;
    this.yearPercent=percent;
    this.yearIncome=calcYearIncome;
}
function calcYearIncome(){
  return (this.yearPercent/100)*this.amount;
}
