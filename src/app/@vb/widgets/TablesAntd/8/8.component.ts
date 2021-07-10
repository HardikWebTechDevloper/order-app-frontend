import { Component, OnInit } from '@angular/core'

interface ItemData {
  name: string
  age: number
  address: string
}

@Component({
  selector: 'vb-tables-antd-8',
  templateUrl: './8.component.html',
  styleUrls: ['./8.component.scss'],
})
export class VbTablesAntd8Component implements OnInit {
  listOfData: ItemData[] = []

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London`,
      })
    }
  }
}
