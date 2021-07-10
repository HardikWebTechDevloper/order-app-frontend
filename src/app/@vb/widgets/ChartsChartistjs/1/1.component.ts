import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartistjs-1',
  templateUrl: './1.component.html',
  styleUrls: ['./1.component.scss'],
})
export class VbChartsChartistjs1Component implements OnInit {
  animationData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [1, 2, 2.7, 0, 3, 5, 3, 4, 8, 10, 12, 7],
      [0, 1.2, 2, 7, 2.5, 9, 5, 8, 9, 11, 14, 4],
      [10, 9, 8, 6.5, 6.8, 6, 5.4, 5.3, 4.5, 4.4, 3, 2.8],
    ],
    type: 'Line',
  }
  animationOptions = {
    axisX: {
      labelInterpolationFnc(value, index) {
        return index % 2 !== 0 ? !1 : value
      },
    },
  }

  constructor() {}
  ngOnInit() {}
}
