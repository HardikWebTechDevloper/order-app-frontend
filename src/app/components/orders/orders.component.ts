import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/services/auth.service';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  // Table
  isAllDisplayDataChecked = false
  isOperating = false
  isIndeterminate = false
  listOfDisplayData: Data[] = []
  listOfAllData: Data[] = []
  mapOfCheckedId: { [key: string]: boolean } = {}
  numberOfChecked = 0;

  currentUser: any;
  orderRequest: any = {};
  orderDetail: any;
  currentOrder: any;

  // Datepicker
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';

  date = null;
  today = new Date();

  // Model
  isVisible = false;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private notification: NzNotificationService,
    private authService: AuthService
  ) {
    let userInfo: any = JSON.parse(localStorage.getItem('currentUser'));
    this.orderRequest.brand_user_id = userInfo.user._id;
  }

  ngOnInit(): void {
    this.getAllOrders();
  }

  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, this.today) > 0;

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

  parseOrderDetails(data): void {
    let columnValue: any;
    if (data) {
      let order_details: any = JSON.parse(data);
      columnValue = order_details.shipping_address;
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

  showModal(order: any, order_details: any): void {
    order_details = JSON.parse(order_details);
    this.currentOrder = order;

    this.orderDetail = order_details;
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}

export interface Data {
  _id: string,
  order_no: string,
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
