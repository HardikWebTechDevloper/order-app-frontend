import { Component, AfterViewInit } from '@angular/core'
import c3 from 'c3'

@Component({
  selector: 'vb-charts-c3-9',
  templateUrl: './9.component.html',
  styleUrls: ['./9.component.scss'],
})
export class VbChartsC39Component implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    const colors = {
      primary: '#01a8fe',
      def: '#acb7bf',
      success: '#46be8a',
      danger: '#fb434a',
    }

    const subChart = c3.generate({
      bindto: '#sub-chart',
      data: {
        columns: [
          ['Primary', 100, 165, 140, 270, 200, 140, 220, 210, 190, 100, 170, 250],
          ['Success', 110, 80, 100, 85, 125, 90, 100, 130, 120, 90, 100, 115],
        ],
        type: 'spline',
      },
      color: {
        pattern: [colors.primary, colors.danger],
      },
      subchart: {
        show: true,
      },
    })
  }
}
