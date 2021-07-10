import { Component, OnInit } from '@angular/core'
const data: any = require('./data.json')

@Component({
  selector: 'vb-hidden-kit-antd',
  templateUrl: './kit-antd.component.html',
  styleUrls: ['./kit-antd.component.scss'],
})
export class VbHiddenKitAntdComponent implements OnInit {
  kit = data
  selectedExampleIndex = 0
  example = this.kit[this.selectedExampleIndex]

  setExample(index): void {
    this.selectedExampleIndex = index
    this.example = this.kit[index]
  }

  constructor() {}
  ngOnInit() {}
}
