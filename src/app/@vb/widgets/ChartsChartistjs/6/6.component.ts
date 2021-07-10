import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartistjs-6',
  templateUrl: './6.component.html',
  styleUrls: ['./6.component.scss'],
})
export class VbChartsChartistjs6Component implements OnInit {
  horizontalData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    series: [
      [5, 4, 3, 7, 5, 10, 3],
      [3, 2, 9, 5, 4, 6, 4],
    ],
  }
  horizontalOptions = {
    seriesBarDistance: 10,
    reverseData: !0,
    horizontalBars: !0,
    axisY: {
      offset: 70,
    },
  }

  constructor() {}
  ngOnInit() {}
}
