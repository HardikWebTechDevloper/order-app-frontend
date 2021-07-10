import { Component, OnInit } from '@angular/core'
const orders: any = require('./data.json')

@Component({
  selector: 'vb-tables-antd-2',
  templateUrl: './2.component.html',
  styleUrls: ['./2.component.scss'],
})
export class VbTablesAntd2Component implements OnInit {
  listOfColumn = [
    {
      title: 'Id',
      compare: (a, b) => a.id - b.id,
      priority: false,
    },
    {
      title: 'Purchase Date',
      compare: (a, b) => a.id - b.id,
      priority: false,
    },
    {
      title: 'Customer',
      compare: (a, b) => a.id - b.id,
      priority: false,
    },
    {
      title: 'Grand Total',
      compare: (a, b) => a.id - b.id,
      priority: false,
    },
    {
      title: 'Tax',
      compare: (a, b) => a.id - b.id,
      priority: false,
    },
    {
      title: 'Shipping',
      compare: (a, b) => a.id - b.id,
      priority: false,
    },
    {
      title: 'Quantity',
      compare: (a, b) => a.id - b.id,
      priority: false,
    },
    {
      title: 'Status',
      compare: (a, b) => a.id - b.id,
      priority: false,
    },
    {
      title: 'Action',
      compare: (a, b) => a.id - b.id,
      priority: false,
    },
  ]
  listOfData = orders

  constructor() {}
  ngOnInit() {}
}
