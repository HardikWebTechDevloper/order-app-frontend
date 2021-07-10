import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'vb-widgets-lists-24',
  templateUrl: './24.component.html',
  styleUrls: ['./24.component.scss'],
})
export class VbList24Component implements OnInit {
  dialogs = data
  activeIndex = 0

  constructor() {}
  ngOnInit() {}

  changeDialog(index) {
    this.activeIndex = index
  }
}
