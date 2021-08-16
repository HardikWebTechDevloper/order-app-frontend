import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(private http: HttpClient) { }

  getDistributorsList() {
    return this.http.post<any>(`${environment.API_URL}user/get/all`, { "role_name": "Distributor" }).pipe(map((data) => { return data; }));
  }

  getCountriesList() {
    return this.http.post<any>(`${environment.API_URL}country/get/all`, {}).pipe(map((data) => { return data; }));
  }

  getStatesList(country_id) {
    return this.http.post<any>(`${environment.API_URL}state/get/all`, { country_id }).pipe(map((data) => { return data; }));
  }

  getCitiesList(state_id) {
    return this.http.post<any>(`${environment.API_URL}city/get/all`, { state_id }).pipe(map((data) => { return data; }));
  }

  getRoles() {
    return this.http.post<any>(`${environment.API_URL}role/get/all`, {}).pipe(map((data) => { return data; }));
  }

  createDistributor(request) {
    return this.http.post<any>(`${environment.API_URL}user/distributor/create`, request).pipe(map((data) => { return data; }));
  }

}
