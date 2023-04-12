import { Component } from '@angular/core';
import { FoodsDataService } from '../../service/foods-data.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent {
  macroNutrients: any;
  constructor(private foodsDataService: FoodsDataService) {}
  get data() {
    return this.foodsDataService.data;
  }

  addFood(name: string) {
    console.log(name);
    this.foodsDataService.addFood(name);
  }

  ngOnInit(): void {}
}
