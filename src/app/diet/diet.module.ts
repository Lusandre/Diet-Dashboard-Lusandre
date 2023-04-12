import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayComponent } from './pages/today/today.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { ChartComponent } from './pages/chart/chart.component';
import { ChartModule } from 'primeng/chart';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TodayComponent, FoodListComponent, ChartComponent],
  imports: [CommonModule, ChartModule, RouterModule],
  exports: [TodayComponent, FoodListComponent, ChartComponent],
})
export class DietModule {}
