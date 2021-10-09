import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  token: any;
  currentUser: any;
  options: any;

  constructor(private http: HttpClient, private authService: AuthService) {
    let authenticatedUser: any = JSON.parse(localStorage.getItem('currentUser'));

    if (authenticatedUser && authenticatedUser.token) {
      this.token = authenticatedUser.token;
      this.currentUser = authenticatedUser.user;
    }
  }

  getDistributorsList(request: any) {
    return this.http.post<any>(`${environment.API_URL}user/distributor/get`, request, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  getDistributorsTransactions(request: any) {
    return this.http.post<any>(`${environment.API_URL}order/distributor/transactions/get`, request, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  // Request: user_id
  getUserByID(request: any) {
    return this.http.post<any>(`${environment.API_URL}user/get/by/id`, request, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  // Request: user_id
  getDistributorPincodes(request: any) {
    return this.http.post<any>(`${environment.API_URL}user/get/pincodes`, request, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  getBrandOrdersList(request: any) {
    return this.http.post<any>(`${environment.API_URL}order/brand/get`, request, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  getCountriesList() {
    return this.http.post<any>(`${environment.API_URL}country/get/all`, {}, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  getStatesList(country_id) {
    return this.http.post<any>(`${environment.API_URL}state/get/all`, { country_id }, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  getCitiesList(state_id) {
    return this.http.post<any>(`${environment.API_URL}city/get/all`, { state_id }, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  getRoles() {
    return this.http.post<any>(`${environment.API_URL}role/get/all`, {}, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  createDistributor(request) {
    return this.http.post<any>(`${environment.API_URL}user/distributor/create`, request, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  updateDistributor(request) {
    return this.http.post<any>(`${environment.API_URL}user/distributor/update`, request, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  sendOTP(request) {
    return this.http.post<any>(`${environment.API_URL}user/sendOTP`, request, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  getDeliveryPartner(request) {
    return this.http.post<any>(`${environment.API_URL}brand/delivery/partner/get`, request, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  manageDeliveryPartner(request) {
    return this.http.post<any>(`${environment.API_URL}brand/delivery/partner/manage`, request, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

  getBrandOrderReports(request) {
    return this.http.post<any>(`${environment.API_URL}order/brand/report`, request, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    }).pipe(map((data) => { return data; }));
  }

}
