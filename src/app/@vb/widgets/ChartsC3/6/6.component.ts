import { Component, AfterViewInit } from '@angular/core'
import c3 from 'c3'

@Component({
  selector: 'vb-charts-c3-6',
  templateUrl: './6.component.html',
  styleUrls: ['./6.component.scss'],
})
export class VbChartsC36Component implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    const colors = {
      primary: '#01a8fe',
      def: '#acb7bf',
      success: '#46be8a',
      danger: '#fb434a',
    }

    const bar = c3.generate({
      bindto: '#bar',
      data: {
        columns: [
          ['Danger', 30, 200, 100, 400, 150, 250],
          ['Default', 130, 100, 140, 200, 150, 50],
          ['Primary', 130, -150, 200, 300, -200, 100],
        ],
        type: 'bar',
      },
      bar: {
        width: {
          max: 20,
        },
      },
      color: {
        pattern: [colors.danger, colors.def, colors.primary],
      },
      grid: {
        y: {
          show: !0,
        },
        x: {
          show: !1,
        },
      },
    })
  }
}
