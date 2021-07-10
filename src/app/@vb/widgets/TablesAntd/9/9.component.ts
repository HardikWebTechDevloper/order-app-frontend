import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-tables-antd-9',
  templateUrl: './9.component.html',
  styleUrls: ['./9.component.scss'],
})
export class VbTablesAntd9Component implements OnInit {
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]

  constructor() {}
  ngOnInit() {}
}
