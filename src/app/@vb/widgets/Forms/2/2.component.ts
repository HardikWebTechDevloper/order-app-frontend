import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'vb-forms-2',
  templateUrl: './2.component.html',
  styleUrls: ['./2.component.scss'],
})
export class VbForms2Component implements OnInit {
  constructor(private fb: FormBuilder) {}
  validateForm2: FormGroup
  submitForm2(): void {
    for (const i in this.validateForm2.controls) {
      if (this.validateForm2.controls.hasOwnProperty(i)) {
        this.validateForm2.controls[i].markAsDirty()
        this.validateForm2.controls[i].updateValueAndValidity()
      }
    }
  }
  ngOnInit() {
    this.validateForm2 = this.fb.group({
      amount: [null, [Validators.required]],
      pin: [null, [Validators.required]],
    })
  }
}
