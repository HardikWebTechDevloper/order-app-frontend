import { Component, AfterViewInit } from '@angular/core'
import c3 from 'c3'

@Component({
  selector: 'vb-charts-c3-8',
  templateUrl: './8.component.html',
  styleUrls: ['./8.component.scss'],
})
export class VbChartsC38Component implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    const colors = {
      primary: '#01a8fe',
      def: '#acb7bf',
      success: '#46be8a',
      danger: '#fb434a',
    }

    const combination = c3.generate({
      bindto: '#combination',
      data: {
        columns: [
          ['Primary', 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50],
          ['Default', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220],
          ['Success', 300, 200, 160, 400, 250, 250, 300, 200, 160, 400, 250, 250],
          ['Danger', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220],
          ['Primary', 130, 120, 150, 140, 160, 150, 130, 120, 150, 140, 160, 150],
          ['Danger2', 90, 70, 20, 50, 60, 120, 90, 70, 20, 50, 60, 120],
        ],
        type: 'bar',
        types: {
          Success: 'spline',
          Danger: 'line',
          Danger2: 'area',
        },
        groups: [['Primary', 'Default']],
      },
      color: {
        pattern: [colors.primary, colors.def, colors.success, colors.danger, colors.danger],
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
