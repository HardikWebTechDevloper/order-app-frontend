import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartistjs-8',
  templateUrl: './8.component.html',
  styleUrls: ['./8.component.scss'],
})
export class VbChartsChartistjs8Component implements OnInit {
  biPolarBarData = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]],
  }
  biPolarBarOptions = {
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc(value, index) {
        return index % 2 === 0 ? value : null
      },
    },
  }

  constructor() {}
  ngOnInit() {}
}
