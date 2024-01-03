import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements AfterViewInit, OnChanges {
  private map!: mapboxgl.Map;

  @Input() liveLocation?: { latitude: number; longitude: number };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['liveLocation'] && this.liveLocation) {
      this.updateMarker(this.liveLocation);
    }
  }

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  private initializeMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [51.6776, 32.6401],
      zoom: 12,
      accessToken:
        'pk.eyJ1IjoibW9oYW1tYWQ4IiwiYSI6ImNsNG1reTFjdDExMjkzcWxoNmtudnEydWcifQ.J0psrOjfpyUlTXp1GYr66A',
    });

    new mapboxgl.Marker().setLngLat([51.6776, 32.6401]).addTo(this.map);
  }

  private updateMarker(location: { latitude: number; longitude: number }) {
    debugger;
    if (this.map) {
      const marker = new mapboxgl.Marker()
        .setLngLat([location.longitude, location.latitude])
        .addTo(this.map);
      marker.setPopup(new mapboxgl.Popup().setHTML('<h3>Car Location</h3>'));
    }
  }
}
