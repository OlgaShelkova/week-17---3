//1. Создаем класс Транспорт
	class Transport {
		constructor(type, price, brand, image) { // В конструкторе устанавливаются свойства объекта type, price, brand, image и getPrice
			this.type = type;
			this.price = price;
			this.brand = brand;
			this.image = image;
		}
	
		getInfo() {
			return `Type: ${this.type}, Brand: ${this.brand}`;// Создается метод getInfo, который возвращает информацию о типе и бренде
		}
	}
	
	Transport.prototype.getPrice = function () { // Метод getPrice переопределяется в прототипе Transport, чтобы вернуть цену
		return `Price: ${this.price}`;
	};
	
	//2. Создаем класс Car, наследующий от класса Транспорт
	class Car extends Transport {
		constructor(type, price, brand, image, doors) { // Класс Car создается как подкласс Transport, добавляется параметр doors
			super(type, price, brand, image); // Вызывается конструктор родительского класса с помощью super, передаются аргументы 
			this.doors = doors; // Устанавливается свойство doors для объекта Car
		}
}
//3. Добавляем метод getDoorsCount к прототипу Car
Car.prototype.getDoorsCount = function () {
	return `Сar door count: ${this.doors}`;
};
let car = new Car('машина', 2000, 'Opel', 'ссылка', 4); // Создаем экземпляр класса Car

// 4. Создаем класс Bike, который наследует от Transport
class Bike extends Transport {
	constructor(type, price, brand, maxSpeed) {
	super(type, price, brand);
	this.maxSpeed = maxSpeed;
	}
	}
	
	Bike.prototype.getMaxSpeed = function () { // Добавляем метод getMaxSpeed к прототипу Bike
	return `Maximum speed: ${this.maxSpeed}`;
	};
	
	const vehicles = data.map((vehicle) => { // Создаем массив vehicles, заполняя его экземплярами классов Car и Bike
	if (vehicle.type === 'car') {
	return new Car(vehicle.type, vehicle.price, vehicle.brand, vehicle.image, vehicle.doors); // Если тип равен "car", создаем новый экземпляр класса Car с параметрами type, price, brand, image и doors
	} else if (vehicle.type === 'bike') {
	return new Bike(vehicle.type, vehicle.price, vehicle.brand, vehicle.maxSpeed); // Если тип равен "bike", создаем новый экземпляр класса Bike с параметрами type, price, brand и maxSpeed
	}
	});
// Применяется метод forEach для перебора элементов массива vehicles

	vehicles.forEach((vehicle) => {
		console.log(vehicle.getInfo()); // Выводится информация о каждом транспортном средстве с помощью метода getInfo()
		console.log(vehicle.getPrice()); // Выводится цена каждого транспортного средства с помощью метода getPrice()
		if (vehicle instanceof Car && vehicle.getDoorsCount) { // Если транспортное средство является объектом класса Car и имеет метод getDoorsCount, выводится количество дверей
			console.log(vehicle.getDoorsCount());
		}
		if (vehicle instanceof Bike && vehicle.getMaxSpeed) { // Если транспортное средство является объектом класса Bike и имеет метод getMaxSpeed, выводится максимальная скорость
			console.log(vehicle.getMaxSpeed());
		}
	});