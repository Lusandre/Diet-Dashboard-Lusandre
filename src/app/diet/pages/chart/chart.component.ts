import { Component } from '@angular/core';
import { FoodsDataService } from '../../service/foods-data.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  data: any;
  options: any;
  macroNutrients: any;

  constructor(private foodsDataService: FoodsDataService) {
    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: '#000000',
          },
        },
      },
    };
  }

  ngOnInit() {
    this.macroNutrients = this.foodsDataService.getTotalMacroNutrients();
    if (this.macroNutrients) {
      this.data = {
        labels: ['Carbohydrate', 'Fat', 'Protein'],
        datasets: [
          {
            data: [
              this.macroNutrients.totalCarbohydrate,
              this.macroNutrients.totalFat,
              this.macroNutrients.totalProtein,
            ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };
    } else {
    }
  }
}
