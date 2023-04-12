import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './diet/pages/food-list/food-list.component';
import { TodayComponent } from './diet/pages/today/today.component';
import { ChartComponent } from './diet/pages/chart/chart.component';

const routes: Routes = [
  {
    path: '',
    component: FoodListComponent,
    pathMatch: 'full',
  },
  {
    path: 'today',
    component: TodayComponent,
  },
  {
    path: 'chart',
    component: ChartComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
