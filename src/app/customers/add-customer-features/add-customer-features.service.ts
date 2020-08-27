import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddCustomerFeaturesService {

  constructor(private http: HttpClient) { }

  getUnassignedFeatures(customerId){
    let headers = new HttpHeaders().set("content-type", "application/json;charset=UTF-8");
    return this.http.get(`http://localhost:8080/api/v1/customer/${customerId}/features/unassigned`, { headers: headers });
  }
}
