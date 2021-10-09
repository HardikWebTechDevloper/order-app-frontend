import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  currentUser: any;
  orderRequest: any = {};

  orderCounts: any = {};

  constructor(
    private commonService: CommonService,
    private router: Router,
    private notification: NzNotificationService,
    private authService: AuthService
  ) {
    let userInfo: any = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = userInfo.user;
    this.orderRequest.brand_user_id = userInfo.user._id;
  }

  ngOnInit(): void {
    this.getBrandOrderReports();
  }

  getBrandOrderReports(): void {
    this.commonService.getBrandOrderReports(this.orderRequest).pipe(first()).subscribe((response) => {
      if (response.status === true && response.results) {
        this.orderCounts = response.results;

        console.log(this.orderCounts)
      } else {
        this.orderCounts = {};
        this.notification.warning('Error!', response.message);
      }
    }, (error) => {
      this.orderCounts = {};
      this.notification.warning('Error!', "Something went wrong");
    });
  }
}