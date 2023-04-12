import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/data/foods.data';
import { Food } from '../interface/food.interface';

@Injectable({
  providedIn: 'root',
})
export class FoodsDataService {
  private _data: Food[] = foods;
  private _listToday: Food[] = [];
  constructor() {}
  get data() {
    return this._data;
  }

  get listToday() {
    return this._listToday;
  }

  addFood(name: string) {
    let food = this._data.filter((food) => food.name == name);

    this._listToday.push(food[0]);
  }
  delteFood(name: string) {
    const index = this._listToday.findIndex((food) => food.name === name);

    this._listToday.splice(index, 1);
  }
  delteAllFood() {
    this._listToday = [];
  }
  getTotalMacroNutrients() {
    let totalFat = 0;
    let totalCarbohydrate = 0;
    let totalProtein = 0;

    if (this._listToday.length !== 0) {
      for (let food of this._listToday) {
        totalFat += food.macroNutrients.fat;
        totalCarbohydrate += food.macroNutrients.carbohydrate;
        totalProtein += food.macroNutrients.protein;
      }
    } else {
      return false;
    }

    return { totalFat, totalCarbohydrate, totalProtein };
  }
}
