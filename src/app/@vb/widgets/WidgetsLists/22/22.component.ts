import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'vb-widgets-lists-22',
  templateUrl: './22.component.html',
  styleUrls: ['./22.component.scss'],
})
export class VbList22Component implements OnInit {
  dialogs = data
  activeIndex = 0

  constructor() {}
  ngOnInit() {}

  changeDialog(index) {
    this.activeIndex = index
  }
}
