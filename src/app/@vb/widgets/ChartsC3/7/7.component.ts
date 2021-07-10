import { Component, AfterViewInit } from '@angular/core'
import c3 from 'c3'

@Component({
  selector: 'vb-charts-c3-7',
  templateUrl: './7.component.html',
  styleUrls: ['./7.component.scss'],
})
export class VbChartsC37Component implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    const colors = {
      primary: '#01a8fe',
      def: '#acb7bf',
      success: '#46be8a',
      danger: '#fb434a',
    }

    const stackedBar = c3.generate({
      bindto: '#stacked-bar',
      data: {
        columns: [
          ['Primary', -30, 200, 300, 400, -150, 250, -30, 200, 300, 400, -150, 250],
          ['Default', 130, 100, -400, 100, -150, 50, 130, 100, -400, 100, -150, 50],
          ['Danger', -230, 200, 200, -300, 250, 250, -230, 200, 200, -300, 250, 250],
          ['Success', 100, -250, 150, 200, -300, -100, 100, -250, 150, 200, -300, -100],
        ],
        type: 'bar',
        groups: [['Primary', 'Default', 'Danger', 'Success']],
      },
      color: {
        pattern: [colors.primary, colors.def, colors.danger, colors.success],
      },
      bar: {
        width: {
          max: 45,
        },
      },
      grid: {
        y: {
          show: !0,
          lines: [
            {
              value: 0,
            },
          ],
        },
      },
    })
  }
}
