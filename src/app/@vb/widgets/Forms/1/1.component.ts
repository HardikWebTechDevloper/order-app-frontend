import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'vb-forms-1',
  templateUrl: './1.component.html',
  styleUrls: ['./1.component.scss'],
})
export class VbForms1Component implements OnInit {
  marks = {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    60: '60',
    70: '70',
    80: '80',
    90: '90',
    100: '100',
  }
  constructor(private fb: FormBuilder) {}
  validateForm1: FormGroup
  submitForm1(): void {
    for (const i in this.validateForm1.controls) {
      if (this.validateForm1.controls.hasOwnProperty(i)) {
        this.validateForm1.controls[i].markAsDirty()
        this.validateForm1.controls[i].updateValueAndValidity()
      }
    }
  }
  ngOnInit() {
    this.validateForm1 = this.fb.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      budget: [30],
    })
  }
}
