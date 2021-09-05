import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-partner-setting',
  templateUrl: './delivery-partner-setting.component.html',
  styleUrls: ['./delivery-partner-setting.component.scss']
})
export class DeliveryPartnerSettingComponent implements OnInit {

  currentUser: any;

  deliveryPartnerForm: FormGroup;
  submitted = false;

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
    this.deliveryPartnerForm = this.formBuilder.group({
      brand_user_id: [this.currentUser._id],
      brand_id: [this.currentUser.brand_id],
      partner_name: ['', Validators.required],
      api_key: ['', Validators.required]
    });

    this.getDeliveryPartner();
  }

  // convenience getter for easy access to form fields
  get f() { return this.deliveryPartnerForm.controls; }

  getDeliveryPartner(): void {
    let request = { "brand_id": this.currentUser.brand_id };

    this.commonService.getDeliveryPartner(request).pipe(first()).subscribe((response) => {
      if (response.status === true && response.data) {
        let deliveryPartner = response.data;

        this.deliveryPartnerForm.setValue({
          brand_user_id: this.currentUser._id,
          brand_id: this.currentUser.brand_id,
          partner_name: deliveryPartner.partner_name,
          api_key: deliveryPartner.api_key
        });
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.deliveryPartnerForm.invalid) {
      return;
    }

    let requestObj: any = this.deliveryPartnerForm.value;

    this.commonService.manageDeliveryPartner(requestObj).pipe(first()).subscribe((response) => {
      if (response.status === true) {
        this.getDeliveryPartner();
        this.notification.success('Success!', response.message);
      } else {
        this.notification.warning('Error!', response.message);
      }
    }, (error) => {
      this.notification.warning('Error!', "Something went wrong");
    });
  }
}
