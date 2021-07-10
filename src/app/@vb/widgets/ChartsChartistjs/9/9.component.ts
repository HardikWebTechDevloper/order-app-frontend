import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartistjs-9',
  templateUrl: './9.component.html',
  styleUrls: ['./9.component.scss'],
})
export class VbChartsChartistjs9Component implements OnInit {
  stackedBarData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
      [8e5, 12e5, 14e5, 13e5],
      [2e5, 4e5, 5e5, 3e5],
      [1e5, 2e5, 4e5, 6e5],
    ],
  }
  stackedBarOptions = {
    stackBars: !0,
    axisY: {
      labelInterpolationFnc(value) {
        return `${value / 1e3}k`
      },
    },
  }

  constructor() {}
  ngOnInit() {}
}
