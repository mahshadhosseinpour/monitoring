import { Component } from '@angular/core';
import { CarFormData } from './models';
import { CarService } from './service/car.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
})
export class MonitoringComponent {
  cars!: CarFormData[];
  liveLocation!: { latitude: number; longitude: number };

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getCars().subscribe(
      (data) => {
        this.cars = data;
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }
  onCardClick(e: CarFormData): void {
    debugger;
    this.liveLocation = { latitude: 10, longitude: 2 };
  }
}
