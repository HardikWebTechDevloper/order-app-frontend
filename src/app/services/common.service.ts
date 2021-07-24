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

}
