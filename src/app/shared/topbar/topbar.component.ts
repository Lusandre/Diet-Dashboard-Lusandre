import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  currentDate: string;

  constructor() {
    // obtener la fecha y hora actual al crear el componente
    const now = new Date();
    this.currentDate = now.toLocaleDateString();
  }
}
