import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartistjs-3',
  templateUrl: './3.component.html',
  styleUrls: ['./3.component.scss'],
})
export class VbChartsChartistjs3Component implements OnInit {
  lineData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6],
    ],
  }
  lineOptions = {
    fullWidth: !0,
    chartPadding: {
      right: 40,
    },
  }

  constructor() {}
  ngOnInit() {}
}
