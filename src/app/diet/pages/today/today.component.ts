import { Component } from '@angular/core';
import { FoodsDataService } from '../../service/foods-data.service';
import { Food } from '../../interface/food.interface';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
})
export class TodayComponent {
  data: Food[] = [];
  macroNutrients: any;
  constructor(private foodsDataService: FoodsDataService) {}
  ngOnInit(): void {
    this.data = this.foodsDataService.listToday;
    this.macroNutrients = this.foodsDataService.getTotalMacroNutrients();
  }
  deleteFood(name: string) {
    this.foodsDataService.delteFood(name);
    this.macroNutrients = this.foodsDataService.getTotalMacroNutrients();
  }
  deleteAll() {
    this.foodsDataService.delteAllFood;
  }
}
