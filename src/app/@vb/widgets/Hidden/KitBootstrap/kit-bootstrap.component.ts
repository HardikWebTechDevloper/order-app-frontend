import { Component, OnInit } from '@angular/core'
const data: any = require('./data.json')

@Component({
  selector: 'vb-hidden-kit-bootstrap',
  templateUrl: './kit-bootstrap.component.html',
  styleUrls: ['./kit-bootstrap.component.scss'],
})
export class VbHiddenKitBootstrapComponent implements OnInit {
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
