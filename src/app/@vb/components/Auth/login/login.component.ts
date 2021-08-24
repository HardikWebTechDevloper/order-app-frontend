import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import * as Reducers from 'src/app/store/reducers';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'vb-system-login',
  templateUrl: './login.component.html',
  styleUrls: ['../style.component.scss'],
})

export class LoginComponent {
  form: FormGroup
  logo: String
  loading: boolean = false;

  isSentOTP: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router,
    private commonService: CommonService
  ) {
    this.form = fb.group({
      phone: ['', [Validators.required]],
      otp: ['']
    });

    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.logo = state.logo
    })

    this.store.pipe(select(Reducers.getUser)).subscribe(state => {
      this.loading = state.loading;
    })
  }

  get phone() {
    return this.form.controls.phone;
  }
  get otp() {
    return this.form.controls.otp;
  }

  sendOTO(): void {
    this.phone.markAsDirty();
    this.phone.updateValueAndValidity();

    if (this.phone.invalid) {
      return;
    }

    let phone: any = this.phone.value;

    this.commonService.sendOTP({ phone }).pipe(first()).subscribe((response) => {
      if (response.status === true) {
        // Add OTP Validation
        this.form.controls['otp'].setValidators(Validators.required);

        this.isSentOTP = true;
        this.notification.success('Success!', response.message);
      } else {
        this.notification.warning('Error!', response.message);
      }
    });
  }

  submitForm(): void {
    this.phone.markAsDirty()
    this.phone.updateValueAndValidity()
    this.otp.markAsDirty()
    this.otp.updateValueAndValidity()

    console.log(this.otp)

    if (this.phone.invalid || this.otp.invalid) {
      return
    }

    let phone: any = this.phone.value;
    let otp: any = this.otp.value;

    this.authService.login(phone, otp).pipe(first()).subscribe((data) => {
      if (data.status === true) {
        this.notification.success('Logged In', 'You have successfully logged in!');
        this.router.navigate(['/'])
      } else {
        this.notification.warning('Auth Failed', data.message);
      }
    }, (error) => {
      console.log(error)
      this.loading = false;
      this.notification.warning('Auth Failed', null);
    });
  }
}
