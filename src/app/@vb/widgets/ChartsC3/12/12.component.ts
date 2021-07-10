import { Component, AfterViewInit } from '@angular/core'
import c3 from 'c3'

@Component({
  selector: 'vb-charts-c3-12',
  templateUrl: './12.component.html',
  styleUrls: ['./12.component.scss'],
})
export class VbChartsC312Component implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    const colors = {
      primary: '#01a8fe',
      def: '#acb7bf',
      success: '#46be8a',
      danger: '#fb434a',
    }

    const donutChart = c3.generate({
      bindto: '#donut-chart',
      data: {
        columns: [
          ['Danger', 30],
          ['Success', 120],
        ],
        type: 'donut',
      },
      color: {
        pattern: [colors.danger, colors.success],
      },
      donut: {
        title: 'Connections',
      },
    })
  }
}
