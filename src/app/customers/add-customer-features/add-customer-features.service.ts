import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddCustomerFeaturesService {
  
  constructor(private http: HttpClient) { }

  getUnassignedFeatures(customerId) {
    let headers = new HttpHeaders().set("content-type", "application/json;charset=UTF-8");
    return this.http.get(`${environment.backendURL}/customer/${customerId}/features/unassigned`, { headers: headers });
  }

  assignFeature(customerId, featureId){
    let headers = new HttpHeaders().set("content-type", "application/json;charset=UTF-8");
    return this.http.post(`${environment.backendURL}/customers/${customerId}/features/${featureId}/assign`, headers);
  }
}
