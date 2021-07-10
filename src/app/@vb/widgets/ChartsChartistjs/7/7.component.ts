import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartistjs-7',
  templateUrl: './7.component.html',
  styleUrls: ['./7.component.scss'],
})
export class VbChartsChartistjs7Component implements OnInit {
  biPolarLineData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [1, 2, 3, 1, -2, 0, 1, 0],
      [-2, -1, -2, -1, -2.5, -1, -2, -1],
      [0, 0, 0, 1, 2, 2.5, 2, 1],
      [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5],
    ],
  }
  biPolarLineOptions = {
    high: 3,
    low: -3,
    showArea: !0,
    showLine: !1,
    showPoint: !1,
    fullWidth: !0,
    axisX: {
      showLabel: false,
      showGrid: false,
    },
  }

  constructor() {}
  ngOnInit() {}
}
