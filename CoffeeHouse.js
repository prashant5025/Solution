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
