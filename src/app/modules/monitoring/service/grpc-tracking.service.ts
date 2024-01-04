import { Injectable } from '@angular/core';
import { GrpcClient } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import {
  UnitsRequest,
  UnitsResponse,
  LastValuesRequest,
  LastValuesResponse
} from './grpc/tracking_pb';

@Injectable({
  providedIn: 'root'
})
export class GrpcTrackingService {
  private client: GrpcClient;

  constructor() {
    this.client = new GrpcClient({ host: 'http://localhost:8080' });
  }

  getUnits(request: UnitsRequest): Observable<UnitsResponse> {
    return this.client.rpcCall('TrackingService', 'Units', request);
  }

  getLastValues(request: LastValuesRequest): Observable<LastValuesResponse> {
    return this.client.rpcCall('TrackingService', 'LastValues', request);
  }
}
