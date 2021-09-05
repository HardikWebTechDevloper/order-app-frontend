import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  isEditModalVisible = false;
  isConfirmLoading = false;

  countries: string[] = [];
  states: string[] = [];
  cities: string[] = [];
  role_id: string;

  currentUser: any;

  createDistributorForm: FormGroup;
  submitted = false;

  editDistributorForm: FormGroup;
  submittedEditForm = false;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private notification: NzNotificationService,
    private modalService: NzModalService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    let user: any = this.authService.currentUserValue;
    this.currentUser = user.user;
  }

  ngOnInit(): void {
    this.getDistributorsList();
    this.getRoles();

    this.createDistributorForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city_id: ['', [Validators.required]],
      state_id: ['', [Validators.required]],
      country_id: ['', [Validators.required]],
      pin_code: ['', Validators.required],
      distributor_commision: ['', Validators.required],
      distributor_tax_details: ['', Validators.required]
    });

    this.editDistributorForm = this.formBuilder.group({
      user_id: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      city_id: ['', [Validators.required]],
      state_id: ['', [Validators.required]],
      country_id: ['', [Validators.required]],
      pin_code: ['', Validators.required],
      distributor_commision: ['', Validators.required],
      distributor_tax_details: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.createDistributorForm.controls; }

  // convenience getter for easy access to form fields
  get e() { return this.editDistributorForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.createDistributorForm.invalid) {
      return;
    }

    let requestObj: any = this.createDistributorForm.value;
    requestObj.role_id = this.role_id;
    requestObj.brand_user_id = this.currentUser._id;

    this.commonService.createDistributor(requestObj).pipe(first()).subscribe((response) => {
      if (response.status === true) {
        this.isVisible = false;
        this.getDistributorsList();
        this.notification.success('Success!', response.message);
      } else {
        this.notification.warning('Error!', response.message);
      }
    }, (error) => {
      this.notification.warning('Error!', "Something went wrong");
    });
  }

  onSubmitEditForm() {
    this.submittedEditForm = true;

    // stop here if form is invalid
    if (this.editDistributorForm.invalid) {
      return;
    }

    let requestObj: any = this.editDistributorForm.value;

    this.commonService.updateDistributor(requestObj).pipe(first()).subscribe((response) => {
      if (response.status === true) {
        this.isEditModalVisible = false;
        this.getDistributorsList();
        this.notification.success('Success!', response.message);
      } else {
        this.notification.warning('Error!', response.message);
      }
    }, (error) => {
      this.notification.warning('Error!', "Something went wrong");
    });
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

  getCountriesList(): void {
    this.commonService.getCountriesList().pipe(first()).subscribe((response) => {
      if (response.status === true && response.data && response.data.length > 0) {
        this.countries = response.data;
      } else {
        this.countries = [];
      }
    }, (error) => {
      this.countries = [];
    });
  }

  getStatesList(country_id: any): void {
    this.commonService.getStatesList(country_id).pipe(first()).subscribe((response) => {
      if (response.status === true && response.data && response.data.length > 0) {
        this.states = response.data;
      } else {
        this.states = [];
      }
    }, (error) => {
      this.states = [];
    });
  }

  getCitiesList(state_id: any): void {
    this.commonService.getCitiesList(state_id).pipe(first()).subscribe((response) => {
      if (response.status === true && response.data && response.data.length > 0) {
        this.cities = response.data;
      } else {
        this.cities = [];
      }
    }, (error) => {
      this.cities = [];
    });
  }

  getRoles(): void {
    this.commonService.getRoles().pipe(first()).subscribe((response) => {
      if (response.status === true && response.data && response.data.length > 0) {
        let roles: any = response.data;
        let role: any = roles.find((role => role.role_name === "Distributor"));
        this.role_id = role._id;
      } else {
        this.notification.warning('Error!', response.message);
      }
    });
  }

  onCountrySelect(country_id: any): void {
    this.getStatesList(country_id);
  }

  onStateSelect(state_id: any): void {
    this.getCitiesList(state_id);
  }

  showModal(): void {
    this.isVisible = true;
    this.getCountriesList();
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showEditModal(distribution_id: any): void {
    this.isEditModalVisible = true;

    this.commonService.getUserByID({ user_id: distribution_id }).pipe(first()).subscribe((response) => {
      if (response.status === true && response.data) {
        let distributor = response.data;

        this.editDistributorForm.setValue({
          user_id: distributor._id,
          first_name: distributor.first_name,
          last_name: distributor.last_name,
          country_id: distributor.country_id,
          state_id: distributor.state_id,
          city_id: distributor.city_id,
          pin_code: distributor.pin_code,
          distributor_commision: distributor.distributor_commision,
          distributor_tax_details: distributor.distributor_tax_details
        });

        if(distributor.country_id){
          this.getStatesList(distributor.country_id);
        }

        if(distributor.state_id){
          this.getCitiesList(distributor.state_id);
        }

        this.getCountriesList();
      } else {
        this.notification.warning('Error!', response.message);
      }
    });

  }

  handleEditModalCancel(): void {
    this.isEditModalVisible = false;
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
