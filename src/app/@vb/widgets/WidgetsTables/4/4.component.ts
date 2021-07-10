import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'vb-widgets-tables-4',
  templateUrl: './4.component.html',
  styleUrls: ['./4.component.scss'],
})
export class VbTable4Component implements OnInit {
  tableData = data
  constructor() {}
  ngOnInit() {}
}
