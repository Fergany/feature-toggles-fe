import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditFeatureService {

  constructor(private http: HttpClient) { }

  getFeature(featureId){
    let headers = new HttpHeaders().set("content-type", "application/json;charset=UTF-8");
    return this.http.get(`${environment.backendURL}/features/${featureId}`, { headers: headers });
  }
}
