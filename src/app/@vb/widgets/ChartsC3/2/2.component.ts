import { Component, AfterViewInit } from '@angular/core'
import c3 from 'c3'

@Component({
  selector: 'vb-charts-c3-2',
  templateUrl: './2.component.html',
  styleUrls: ['./2.component.scss'],
})
export class VbChartsC32Component implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    const colors = {
      primary: '#01a8fe',
      def: '#acb7bf',
      success: '#46be8a',
      danger: '#fb434a',
    }

    const spline = c3.generate({
      bindto: '#spline',
      data: {
        columns: [
          ['Primary', 100, 165, 140, 270, 200, 140, 220],
          ['Danger', 110, 80, 100, 85, 125, 90, 100],
        ],
        type: 'spline',
      },
      color: {
        pattern: [colors.primary, colors.danger],
      },
      axis: {
        x: {
          tick: {
            outer: !1,
          },
        },
        y: {
          max: 300,
          min: 0,
          tick: {
            outer: !1,
            count: 7,
            values: [0, 50, 100, 150, 200, 250, 300],
          },
        },
      },
      grid: {
        x: {
          show: !1,
        },
        y: {
          show: !0,
        },
      },
    })
  }
}
