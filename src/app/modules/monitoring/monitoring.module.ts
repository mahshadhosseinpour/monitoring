import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { MonitoringComponent } from './monitoring.component';
import { MonitoringRoutingModule } from './monitoring.routes';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MonitoringRoutingModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [],
  declarations: [MonitoringComponent, CarListComponent, MapComponent],
  providers: [],
})
export class MonitoringModule {}
