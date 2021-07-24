import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import * as Reducers from 'src/app/store/reducers';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-list-distributors',
  templateUrl: './list-distributors.component.html',
  styleUrls: ['./list-distributors.component.scss']
})
export class ListDistributorsComponent implements OnInit {

  isAllDisplayDataChecked = false
  isOperating = false
  isIndeterminate = false
  listOfDisplayData: Data[] = []
  listOfAllData: Data[] = []
  mapOfCheckedId: { [key: string]: boolean } = {}
  numberOfChecked = 0;

  isVisible = false;
  isConfirmLoading = false;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private notification: NzNotificationService,
    private modalService: NzModalService
  ) {

  }

  currentPageDataChange($event: Data[]): void {
    this.listOfDisplayData = $event
    this.refreshStatus()
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .filter(item => !item.status)
      .every(item => this.mapOfCheckedId[item._id])
    this.isIndeterminate =
      this.listOfDisplayData
        .filter(item => !item.status)
        .some(item => this.mapOfCheckedId[item._id]) && !this.isAllDisplayDataChecked
    this.numberOfChecked = this.listOfAllData.filter(item => this.mapOfCheckedId[item._id]).length
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData
      .filter(item => !item.status)
      .forEach(item => (this.mapOfCheckedId[item._id] = value))
    this.refreshStatus()
  }

  operateData(): void {
    this.isOperating = true
    setTimeout(() => {
      this.listOfAllData.forEach(item => (this.mapOfCheckedId[item._id] = false))
      this.refreshStatus()
      this.isOperating = false
    }, 1000)
  }

  getDistributorsList(): void {
    this.commonService.getDistributorsList().pipe(first()).subscribe((response) => {
      if (response.status === true && response.data && response.data.length > 0) {
        this.listOfAllData = response.data;
        this.notification.success('Success!', response.message);
      } else {
        this.listOfAllData = [];
        this.notification.warning('Error!', response.message);
      }
    }, (error) => {
      this.listOfAllData = [];
      this.notification.warning('Error!', "Something went wrong");
    });
  }

  ngOnInit(): void {
    this.getDistributorsList();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

export interface Data {
  _id: string,
  first_name: string,
  last_name: string,
  phone: number,
  email: string,
  role_id: string,
  city_id: string,
  state_id: string,
  country_id: string,
  pin_code: number,
  distributor_commision: number,
  distributor_tax_details: number,
  status: boolean,
}
