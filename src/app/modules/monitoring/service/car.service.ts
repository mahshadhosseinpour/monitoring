import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarFormData } from '../models';

@Injectable({ providedIn: 'root' })
export class CarService {
  constructor() {}

  cars: CarFormData[] = [
    {
      id: 1,
      image: 'assets/uniticon/ic_unit1.png',
      title: 'Unit 1',
      driverName: 'Ali',
      offline: false,
      temperature: 25,
      connected: true,
    },
    {
      id: 2,
      image: 'assets/uniticon/ic_unit2.png',
      title: 'Unit 2',
      driverName: 'John',
      offline: true,
      temperature: 20,
      connected: false,
    },
  ];
  getCars(): Observable<CarFormData[]> {
    return of(this.cars);
  }
}
