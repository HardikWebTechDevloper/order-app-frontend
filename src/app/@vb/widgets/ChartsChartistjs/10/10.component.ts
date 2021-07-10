import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartistjs-10',
  templateUrl: './10.component.html',
  styleUrls: ['./10.component.scss'],
})
export class VbChartsChartistjs10Component implements OnInit {
  overlappingBarData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
    ],
  }
  overlappingBarOptions = {
    seriesBarDistance: 10,
  }
  overlappingResponsiveOptions = [
    [
      '',
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc(value) {
            return value[0]
          },
        },
      },
    ],
  ]

  constructor() {}
  ngOnInit() {}
}
