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
    let authenticatedUser: any = this.authService.currentUserValue;

    this.token = authenticatedUser.token;
    this.currentUser = authenticatedUser.user;

    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + this.token);

    this.options = { headers: httpHeaders };
  }

  getDistributorsList() {
    let brand_user_id: any = this.currentUser._id;
    return this.http.post<any>(`${environment.API_URL}user/distributor/get`, { "brand_user_id": brand_user_id }).pipe(map((data) => { return data; }));
  }
  
  getDistributorsTransactions(request: any) {
    return this.http.post<any>(`${environment.API_URL}order/distributor/transactions/get`, request).pipe(map((data) => { return data; }));
  }
  
  // Request: user_id
  getUserByID(request: any) {
    return this.http.post<any>(`${environment.API_URL}user/get/by/id`, request).pipe(map((data) => { return data; }));
  }
  
  // Request: user_id
  getDistributorPincodes(request: any) {
    return this.http.post<any>(`${environment.API_URL}user/get/pincodes`, request).pipe(map((data) => { return data; }));
  }

  getBrandOrdersList(request: any) {
    return this.http.post<any>(`${environment.API_URL}order/brand/get`, request).pipe(map((data) => { return data; }));
  }

  getCountriesList() {
    return this.http.post<any>(`${environment.API_URL}country/get/all`, {}, { headers: this.options }).pipe(map((data) => { return data; }));
  }

  getStatesList(country_id) {
    return this.http.post<any>(`${environment.API_URL}state/get/all`, { country_id }, { headers: this.options }).pipe(map((data) => { return data; }));
  }

  getCitiesList(state_id) {
    return this.http.post<any>(`${environment.API_URL}city/get/all`, { state_id }, { headers: this.options }).pipe(map((data) => { return data; }));
  }

  getRoles() {
    return this.http.post<any>(`${environment.API_URL}role/get/all`, {}, { headers: this.options }).pipe(map((data) => { return data; }));
  }

  createDistributor(request) {
    return this.http.post<any>(`${environment.API_URL}user/distributor/create`, request, { headers: this.options }).pipe(map((data) => { return data; }));
  }

  updateDistributor(request) {
    return this.http.post<any>(`${environment.API_URL}user/distributor/update`, request, { headers: this.options }).pipe(map((data) => { return data; }));
  }

  sendOTP(request) {
    return this.http.post<any>(`${environment.API_URL}user/sendOTP`, request, { headers: this.options }).pipe(map((data) => { return data; }));
  }

  getDeliveryPartner(request) {
    return this.http.post<any>(`${environment.API_URL}brand/delivery/partner/get`, request, { headers: this.options }).pipe(map((data) => { return data; }));
  }
  
  manageDeliveryPartner(request) {
    return this.http.post<any>(`${environment.API_URL}brand/delivery/partner/manage`, request, { headers: this.options }).pipe(map((data) => { return data; }));
  }

}
