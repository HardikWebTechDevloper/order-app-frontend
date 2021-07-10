import { Component, AfterViewInit } from '@angular/core'
import c3 from 'c3'

@Component({
  selector: 'vb-charts-c3-3',
  templateUrl: './3.component.html',
  styleUrls: ['./3.component.scss'],
})
export class VbChartsC33Component implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    const colors = {
      primary: '#01a8fe',
      def: '#acb7bf',
      success: '#46be8a',
      danger: '#fb434a',
    }
    const step = c3.generate({
      bindto: '#step',
      data: {
        columns: [
          ['Primary', 300, 350, 300, 0, 0, 100],
          ['Success', 130, 100, 140, 200, 150, 50],
        ],
        types: {
          Primary: 'step',
          Success: 'area-step',
        },
      },
      color: {
        pattern: [colors.primary, colors.success],
      },
    })
  }
}
