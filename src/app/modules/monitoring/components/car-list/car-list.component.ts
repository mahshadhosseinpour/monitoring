import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarFormData } from '../../models';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
})
export class CarListComponent {
  @Input() car!: CarFormData;
  @Output() cardClick: EventEmitter<CarFormData> =
    new EventEmitter<CarFormData>();

  onCardClick(): void {
    this.cardClick.emit(this.car);
  }
}
