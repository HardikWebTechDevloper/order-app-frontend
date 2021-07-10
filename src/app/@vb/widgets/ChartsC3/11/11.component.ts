import { Component, AfterViewInit } from '@angular/core'
import c3 from 'c3'

@Component({
  selector: 'vb-charts-c3-11',
  templateUrl: './11.component.html',
  styleUrls: ['./11.component.scss'],
})
export class VbChartsC311Component implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    const colors = {
      primary: '#01a8fe',
      def: '#acb7bf',
      success: '#46be8a',
      danger: '#fb434a',
    }

    const pieCHart = c3.generate({
      bindto: '#pie-chart',
      data: {
        columns: [
          ['Primary', 30],
          ['Success', 120],
        ],
        type: 'pie',
      },
      color: {
        pattern: [colors.primary, colors.success],
      },
    })
  }
}
