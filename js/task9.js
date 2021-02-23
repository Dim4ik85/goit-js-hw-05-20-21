/* 
Конструктор класса
При вызове с опертором new, функция-конструктор добавляет свойства на создаваемый объект.

function User({ name, email }) {
  this.name = name;
  this.email = email;
}
Для инициализации экземпляра в классе есть метод constructor. Если он не объявлен, создаётся конструктор по умолчанию - пустая функция, которая не изменяет экземпляр.

class User {
  // Необязательное объявление публичных свойств
  name;
  email;

  // Аналог функции-конструктора
  constructor({ name, email }) {
    // Инициализация объявленных свойств
    this.name = name;
    this.email = email;
  }
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
Свойства name и email называются публичные свойства, потому что они будут собственными свойствами объекта-экземпляра и к ним можно будет получить доступ обратившись через точку.

Объявлять публичные свойства в теле класса до конструктора необязательно, но это может повысить читабельность, так как код внутри конструктора может быть довольно громоздким и визуально выделить набор свойств класса будет затруднительно.

Задание
Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.

Тесты
Объявлен класс Car.
Конструктор класса принимает объект со свойствами brand, model и price.
В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.
*/
//Условие 
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

//Решение
class Car {
  // brand;
  // model;
  // price;
  //необязательно объявлять эти свойства { brand, model, price }
constructor({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
}
console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));