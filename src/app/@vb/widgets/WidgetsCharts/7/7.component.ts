import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'vb-widgets-charts-7',
  templateUrl: './7.component.html',
  styleUrls: ['./7.component.scss'],
})
export class VbChart7Component implements OnInit {
  tableData = data
  constructor() {}
  ngOnInit() {}
}
