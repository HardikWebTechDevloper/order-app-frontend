import { Component, AfterViewInit } from '@angular/core'
import c3 from 'c3'

@Component({
  selector: 'vb-charts-c3-4',
  templateUrl: './4.component.html',
  styleUrls: ['./4.component.scss'],
})
export class VbChartsC34Component implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    const colors = {
      primary: '#01a8fe',
      def: '#acb7bf',
      success: '#46be8a',
      danger: '#fb434a',
    }

    const area = c3.generate({
      bindto: '#area',
      data: {
        columns: [
          ['Primary', 300, 350, 300, 0, 0, 0],
          ['Success', 130, 100, 140, 200, 150, 50],
        ],
        types: {
          Primary: 'area',
          Success: 'area-spline',
        },
      },
      color: {
        pattern: [colors.primary, colors.success],
      },
    })
  }
}
