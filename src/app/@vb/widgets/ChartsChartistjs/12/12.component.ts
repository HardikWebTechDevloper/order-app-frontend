import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartistjs-12',
  templateUrl: './12.component.html',
  styleUrls: ['./12.component.scss'],
})
export class VbChartsChartistjs12Component implements OnInit {
  labelsPieData = {
    labels: ['Bananas', 'Apples', 'Grapes'],
    series: [20, 15, 40],
  }
  labelsPieOptions = {
    labelInterpolationFnc(value) {
      return value[0]
    },
  }
  labelsPieResponsiveOptions = [
    [
      'screen and (min-width: 640px)',
      {
        chartPadding: 30,
        labelOffset: 100,
        labelDirection: 'explode',
        labelInterpolationFnc(value) {
          return value
        },
      },
    ],
    [
      'screen and (min-width: 1024px)',
      {
        labelOffset: 80,
        chartPadding: 20,
      },
    ],
  ]

  constructor() {}
  ngOnInit() {}
}
