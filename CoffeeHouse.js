// Question 2:
// Please implement a software for a Coffee House using Object Oriented Programming. If you are not familiar or
// comfortable with object-oriented programming, we suggest you give this article a quick read to ensure you
// understand it before you attempt it.
// It should have the following features:
// - Allow users to order a coffee from Espresso, Cappuccino, Latte.
// - Allow users to specify add-ons: Milk, Cream, Latte
// Prices for the available options are as follows
// Product/Add-on Milk Cream Latte
// Espresso 60 75 100
// Cappuccino 80 90 125
// Latte 100 125 150
// We need to define the solution as follows:
// 1. Display the combination of coffees that can be ordered
// 2. Allow users to choose their coffee type with the preferred add-on.
// 3. Generate the detailed bill/receipt with the amount to be paid.
// 4. Allow users to order more than 1 cup and more than 1 variety

// Solution:

class Coffee {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  toString() {
    return `${this.name} - ${this.price}`;
  }

  static getEspresso() {
    return new Coffee("Espresso", 60);
  }

  static getCappuccino() {
    return new Coffee("Cappuccino", 80);
  }

  static getLatte() {
    return new Coffee("Latte", 100);
  }

  static getCoffee(coffeeName) {
    switch (coffeeName) {
      case "Espresso":
        return Coffee.getEspresso();
      case "Cappuccino":
        return Coffee.getCappuccino();
      case "Latte":
        return Coffee.getLatte();

      default:
        return null;
    }
  }

  static getCoffeeList() {
    return [Coffee.getEspresso(), Coffee.getCappuccino(), Coffee.getLatte()];
  }

  static getCoffeeListString() {
    return Coffee.getCoffeeList()
      .map((coffee) => coffee.toString())
      .join("");
  }

  static getCoffeePrice(coffeeName, addOn) {
    const coffee = Coffee.getCoffee(coffeeName);
    if (!coffee) {
      return null;
    }

    switch (addOn) {
      case "Milk":
        return coffee.getPrice() + 20;
      case "Cream":
        return coffee.getPrice() + 35;
      case "Latte":
        return coffee.getPrice() + 50;
      default:
        return coffee.getPrice();
    }
  }

  static getCoffeePriceString(coffeeName, addOn) {
    const coffeePrice = Coffee.getCoffeePrice(coffeeName, addOn);
    if (!coffeePrice) {
      return null;
    }

    return `${coffeeName} - ${coffeePrice}`;
  }

  static getCoffeePriceListString() {
    return Coffee.getCoffeeList()
      .map((coffee) => Coffee.getCoffeePriceString(coffee.getName(), "None"))
      .join("");
  }

  static getCoffeePriceListWithAddOnString() {
    return Coffee.getCoffeeList()
      .map((coffee) => Coffee.getCoffeePriceString(coffee.getName(), "Milk"))
      .join("");
  }
}

class Order {
  constructor() {
    this.coffeeList = [];
  }

  addCoffee(coffee) {
    this.coffeeList.push(coffee);
  }

  getCoffeeList() {
    return this.coffeeList;
  }

  getTotalPrice() {
    return this.coffeeList.reduce(
      (total, coffee) => total + coffee.getPrice(),
      0
    );
  }

  toString() {
    return this.coffeeList.map((coffee) => coffee.toString()).join("");
  }
}

class OrderManager {
  constructor() {
    this.order = new Order();
  }

  addCoffee(coffeeName, addOn) {
    const coffee = Coffee.getCoffee(coffeeName);
    if (!coffee) {
      return null;
    }

    const coffeePrice = Coffee.getCoffeePrice(coffeeName, addOn);
    if (!coffeePrice) {
      return null;
    }

    const newCoffee = new Coffee(coffeeName, coffeePrice);
    this.order.addCoffee(newCoffee);
  }

  getOrder() {
    return this.order;
  }

  getOrderString() {
    return this.order.toString();
  }

  getOrderTotalPrice() {
    return this.order.getTotalPrice();
  }
}

const orderManager = new OrderManager();
orderManager.addCoffee("Espresso", "Milk");
orderManager.addCoffee("Cappuccino", "Cream");
orderManager.addCoffee("Latte", "Latte");

console.log(Coffee.getCoffeeListString());
