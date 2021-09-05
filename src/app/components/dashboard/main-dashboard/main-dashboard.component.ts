import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  // For Order table
  isAllDisplayDataChecked = false
  isOperating = false
  isIndeterminate = false
  listOfDisplayData: Data[] = []
  listOfAllData: Data[] = []
  mapOfCheckedId: { [key: string]: boolean } = {}
  numberOfChecked = 0;

  // For Transaction table
  isAllDisplayTransactionDataChecked = false
  isTransactionOperating = false
  isTransactionIndeterminate = false
  listOfDisplayTransactionData: Data[] = []
  listOfAllTransactionData: Data[] = []
  mapOfCheckedTransactionId: { [key: string]: boolean } = {}
  numberOfTransactionChecked = 0;

  // Multiselect dropdown
  distributorList = [];
  selectedDistributors = [];
  distributorDropdownSettings = {};

  currentUser: any;
  orderRequest: any = {};
  transactionRequest: any = {};

  constructor(
    private commonService: CommonService,
    private router: Router,
    private notification: NzNotificationService,
    private authService: AuthService
  ) {
    let user: any = this.authService.currentUserValue;
    this.currentUser = user.user;

    this.orderRequest.brand_user_id = this.currentUser._id;
    this.transactionRequest.brand_user_id = this.currentUser._id;
  }

  ngOnInit(): void {
    this.getAllOrders();
    this.getDistributors();
    this.getDistributorsTransactions();

    this.distributorDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      itemsShowLimit: 2,
      allowSearchFilter: true,
      enableCheckAll: false
    };
  }

  getDistributors(): void {
    this.commonService.getDistributorsList().pipe(first()).subscribe((response) => {
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

  getDistributorsTransactions(): void {
    this.commonService.getDistributorsTransactions(this.transactionRequest).pipe(first()).subscribe((response) => {
      if (response.status === true && response.data && response.data.length > 0) {
        this.listOfAllTransactionData = response.data;
        this.notification.success('Success!', response.message);
      } else {
        this.listOfAllTransactionData = [];
        this.notification.warning('Error!', response.message);
      }
    }, (error) => {
      this.listOfAllTransactionData = [];
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

export interface TransactionData {
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