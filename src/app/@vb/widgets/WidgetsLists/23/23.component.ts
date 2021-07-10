import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'vb-widgets-lists-23',
  templateUrl: './23.component.html',
  styleUrls: ['./23.component.scss'],
})
export class VbList23Component implements OnInit {
  dialogs = data
  activeIndex = 0

  constructor() {}
  ngOnInit() {}

  changeDialog(index) {
    this.activeIndex = index
  }
}
