import { Component, OnInit } from '@angular/core'

interface DataItem {
  name: string
  age: number
  address: string
}

@Component({
  selector: 'vb-tables-antd-6',
  templateUrl: './6.component.html',
  styleUrls: ['./6.component.scss'],
  styles: [
    `
      .search-box {
        padding: 8px;
      }

      .search-box input {
        width: 188px;
        margin-bottom: 8px;
        display: block;
      }

      .search-box button {
        width: 90px;
      }

      .search-button {
        margin-right: 8px;
      }
    `,
  ],
})
export class VbTablesAntd6Component implements OnInit {
  searchValue = ''
  visible = false
  listOfData: DataItem[] = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ]
  listOfDisplayData = [...this.listOfData]

  reset(): void {
    this.searchValue = ''
    this.search()
  }

  search(): void {
    this.visible = false
    this.listOfDisplayData = this.listOfData.filter(
      (item: DataItem) => item.name.indexOf(this.searchValue) !== -1,
    )
  }

  ngOnInit() {}
}
