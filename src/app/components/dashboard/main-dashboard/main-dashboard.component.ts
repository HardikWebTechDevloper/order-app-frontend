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

  constructor(
    private commonService: CommonService,
    private router: Router,
    private notification: NzNotificationService,
    private authService: AuthService
  ) {
    let userInfo: any = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = userInfo.user;
  }

  ngOnInit(): void {

  }
}