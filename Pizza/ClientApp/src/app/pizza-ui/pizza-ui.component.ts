import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-ui',
  templateUrl: './pizza-ui.component.html',
  styleUrls: ['./pizza-ui.component.css']
})
export class PizzaUIComponent implements OnInit {

  pizzasize = "";
  pizzatopping = "";
  promotion = "";
  numofpizzasselected= 1;
  numofpizzas: Array<Number> = [];

  //sizes
  SmallPizeSize = "S";
  MedPizeSize = "M";
  LargePizeSize = "L";
  ExtraLargePizeSize = "E";

  //toppings

  //veg toppings
  hastomatoes = false;
  hasonions = false;
  hasbananapeppers = false;
  hasmushrooms = false;
  haspine = false;

  //non veg toppings
  hassausage = false;
  hasPepporini = false;
  hasBBQChicken = false;

  Total = 0;
  ToppingTotal = 0;

  public updateTotal() {

    //resetting to zero
    this.Total = 0;
    this.ToppingTotal = 0;
    this.promotion = "";

    //veg toppings
    if (this.hastomatoes)
      this.Total += 1;
    if (this.hasonions)
      this.Total += 0.50;
    if (this.hasbananapeppers)
      this.Total += 1.00;
    if (this.hasmushrooms)
      this.Total += 1.20;
    if (this.haspine)
      this.Total += 0.75;
    //non-veg toppings
    if (this.hassausage)
      this.Total += 1.00;
    if (this.hasPepporini)
      this.Total += 2.00;
    if (this.hasBBQChicken)
      this.Total += 3.00;

    //updatkgn topping total
    this.ToppingTotal = this.Total;

    //updating pizza size
    switch (this.pizzasize) {

      case "S":
        this.Total += 5;
        break;


      case "M":
        this.Total += 7;
        break;


      case "L":
        this.Total += 8;
        break;


      case "E":
        this.Total += 9;
        break;

      default:
    }
    //taking into account number of pizzas selected 
    this.Total = this.Total * this.numofpizzasselected;

    //Promotions

    //promotion1
    if (this.numofpizzasselected == 1 &&
      this.pizzasize == "M" && this.HasTwoToppings()) {
      this.Total -= 5;
      this.promotion = "Promotion 1 Applied!";
    }

    if (this.numofpizzasselected == 4 &&
      this.pizzasize == "M" && this.HasFourToppings()) {
      this.Total -= 9;
      this.promotion = "Promotion 2 Applied!";
    }

    if (this.numofpizzasselected == 1 &&
      this.pizzasize == "L" && this.HasFourToppings()) {
      this.Total = this.Total / 2;
      this.promotion = "Promotion 3 Applied!";
    }
  }

  public NumberOfPizzasChanged(value: string) {
    this.numofpizzasselected = parseInt(value);
    this.updateTotal();
  }

  public HasTwoToppings() {

    let toppingCount = 0;

    //veg toppings
    if (this.hastomatoes)
      toppingCount++;
    if (this.hasonions)
      toppingCount++;
    if (this.hasbananapeppers)
      toppingCount++;
    if (this.hasmushrooms)
      toppingCount++;
    if (this.haspine)
      toppingCount++;
    //non-veg toppings
    if (this.hassausage)
      toppingCount++;
    if (this.hasPepporini)
      toppingCount++;
    if (this.hasBBQChicken)
      toppingCount++;

    return toppingCount >= 2;
  }

  public HasFourToppings() {

    let toppingCount = 0;

    //veg toppings
    if (this.hastomatoes)
      toppingCount++;
    if (this.hasonions)
      toppingCount++;
    if (this.hasbananapeppers)
      toppingCount++;
    if (this.hasmushrooms)
      toppingCount++;
    if (this.haspine)
      toppingCount++;
    //non-veg toppings
    if (this.hassausage)
      toppingCount++;
    if (this.hasPepporini)
      toppingCount++;
    if (this.hasBBQChicken)
      toppingCount++;

    return toppingCount >= 4;
  }

  constructor() {
    for (var i = 1; i < 100; i++) {
      this.numofpizzas.push(i);
    }
  }

  ngOnInit(): void {
  }

}
