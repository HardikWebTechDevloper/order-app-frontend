import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {

  // Table
  isAllDisplayDataChecked = false
  isOperating = false
  isIndeterminate = false
  listOfDisplayData: Data[] = []
  listOfAllData: Data[] = []
  mapOfCheckedId: { [key: string]: boolean } = {}
  numberOfChecked = 0;

  // Multiselect dropdown
  distributorList = [];
  selectedDistributors = [];
  distributorDropdownSettings = {};

  currentUser: any;
  orderRequest: any = {};
  brandRequest: any = {};

  // Datepicker
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';

  date = null;
  today = new Date();

  constructor(
    private commonService: CommonService,
    private router: Router,
    private notification: NzNotificationService,
    private authService: AuthService
  ) {
    let userInfo: any = JSON.parse(localStorage.getItem('currentUser'));
    this.orderRequest.brand_user_id = userInfo.user._id;
    this.brandRequest.brand_user_id = userInfo.user._id;
  }

  ngOnInit(): void {
    this.getAllOrders();
    this.getDistributors();

    this.distributorDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      itemsShowLimit: 2,
      allowSearchFilter: true,
      enableCheckAll: false
    };
  }

  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, this.today) > 0;


  getDistributors(): void {
    this.commonService.getDistributorsList(this.brandRequest).pipe(first()).subscribe((response) => {
      if (response.status === true && response.data && response.data.length > 0) {
        this.distributorList = response.data.map((data: any) => {
          let element: any = {
            item_id: data._id,
            item_text: `${data.first_name} ${data.last_name}`
          };
          return element;
        });
      } else {
        this.distributorList = [];
      }
    }, (error) => {
      this.distributorList = [];
    });
  }

  onItemSelect(item: any) {
    let distributors: any = [];

    if (this.selectedDistributors && this.selectedDistributors.length > 0) {
      distributors = this.selectedDistributors.map((data: any) => data.item_id);
    }

    this.orderRequest.distributor_ids = distributors;

    this.getAllOrders();
  }

  onItemDeSelect(item: any) {
    let distributors: any = [];

    if (this.selectedDistributors && this.selectedDistributors.length > 0) {
      distributors = this.selectedDistributors.map((data: any) => data.item_id);
    }

    this.orderRequest.distributor_ids = distributors;

    this.getAllOrders();
  }

  getAllOrders(): void {
    this.commonService.getBrandOrdersList(this.orderRequest).pipe(first()).subscribe((response) => {
      if (response.status === true && response.data && response.data.length > 0) {
        this.listOfAllData = response.data;
      } else {
        this.listOfAllData = [];
        this.notification.warning('Error!', response.message);
      }
    }, (error) => {
      this.listOfAllData = [];
      this.notification.warning('Error!', "Something went wrong");
    });
  }

  // For Orders
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

  operateData(): void {
    this.isOperating = true
    setTimeout(() => {
      this.listOfAllData.forEach(item => (this.mapOfCheckedId[item._id] = false))
      this.refreshStatus()
      this.isOperating = false
    }, 1000)
  }

  parseOrderDetails(column_name, data): void {
    let columnValue: any;
    if (data) {
      let order_details: any = JSON.parse(data);
      columnValue = order_details[column_name];
    }

    return columnValue;
  }

  onChangeDatePicker(result: Date[]): void {
    if (result && result.length > 0) {
      let startDate = moment(result[0]).format('YYYY-MM-DD');
      let endDate = moment(result[1]).format('YYYY-MM-DD');

      this.orderRequest.start_date = startDate;
      this.orderRequest.end_date = endDate;
    } else {
      this.orderRequest.start_date = "";
      this.orderRequest.end_date = "";
    }

    this.getAllOrders();
  }
}

export interface Data {
  _id: string,
  order_datetime: string,
  order_status: string,
  deliver_by: number,
  reason_for_return_order: string,
  expected_delivery_time: string,
  amount: number,
  pincode: number,
  order_details: string,
  created_at: string,
  updated_at: string,
  distributor_id: string,
  status: boolean
}