import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'vb-widgets-tables-3',
  templateUrl: './3.component.html',
  styleUrls: ['./3.component.scss'],
})
export class VbTable3Component implements OnInit {
  tableData = data
  constructor() {}
  ngOnInit() {}
}
