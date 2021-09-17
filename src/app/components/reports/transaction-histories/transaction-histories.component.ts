import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';

@Component({
  selector: 'app-transaction-histories',
  templateUrl: './transaction-histories.component.html',
  styleUrls: ['./transaction-histories.component.scss']
})
export class TransactionHistoriesComponent implements OnInit {

  // For Transaction table
  isAllDisplayTransactionDataChecked = false
  isTransactionOperating = false
  isTransactionIndeterminate = false
  listOfDisplayTransactionData: Data[] = []
  listOfAllTransactionData: Data[] = []
  mapOfCheckedTransactionId: { [key: string]: boolean } = {}
  numberOfTransactionChecked = 0;

  distributorList = [];

  currentUser: any;
  orderRequest: any = {};
  transactionRequest: any = {};
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
    this.transactionRequest.brand_user_id = userInfo.user._id;
    this.brandRequest.brand_user_id = userInfo.user._id;
  }

  ngOnInit(): void {
    this.getDistributors();
    this.getDistributorsTransactions();
  }

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

  getDistributorsTransactions(): void {
    this.commonService.getDistributorsTransactions(this.transactionRequest).pipe(first()).subscribe((response) => {
      if (response.status === true && response.data && response.data.length > 0) {
        this.listOfAllTransactionData = response.data;
        // this.notification.success('Success!', response.message);
      } else {
        this.listOfAllTransactionData = [];
        this.notification.warning('Error!', response.message);
      }
    }, (error) => {
      this.listOfAllTransactionData = [];
      this.notification.warning('Error!', "Something went wrong");
    });
  }

  // For Transactions
  currentPageTransactionDataChange($event: []): void {
    this.listOfDisplayTransactionData = $event
    this.refreshTransactionStatus()
  }

  refreshTransactionStatus(): void {
    this.isAllDisplayTransactionDataChecked = this.listOfDisplayTransactionData
      .filter(item => !item.status)
      .every(item => this.mapOfCheckedTransactionId[item._id])
    this.isTransactionIndeterminate = this.listOfDisplayTransactionData
      .filter(item => !item.status)
      .some(item => this.mapOfCheckedTransactionId[item._id]) && !this.isAllDisplayTransactionDataChecked
    this.numberOfTransactionChecked = this.listOfAllTransactionData.filter(item => this.mapOfCheckedTransactionId[item._id]).length
  }

  operateTransactionData(): void {
    this.isTransactionOperating = true
    setTimeout(() => {
      this.listOfAllTransactionData.forEach(item => (this.mapOfCheckedTransactionId[item._id] = false))
      this.refreshTransactionStatus()
      this.isTransactionOperating = false
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

  selectedDistributor(value: string): void {
    this.transactionRequest.distributor_id = value;

    this.getDistributorsTransactions();
  }

  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, this.today) > 0;

  onChangeDatePicker(result: Date[]): void {
    if (result && result.length > 0) {
      let startDate = moment(result[0]).format('YYYY-MM-DD');
      let endDate = moment(result[1]).format('YYYY-MM-DD');

      this.transactionRequest.start_date = startDate;
      this.transactionRequest.end_date = endDate;
    } else {
      this.transactionRequest.start_date = "";
      this.transactionRequest.end_date = "";
    }

    this.getDistributorsTransactions();
  }
}

export interface Data {
  _id: string,
  order_id: string,
  type: string,
  amount: number,
  distributor_name: string,
  created_at: string,
  updated_at: string,
  distributor_id: string,
  status: boolean,
}