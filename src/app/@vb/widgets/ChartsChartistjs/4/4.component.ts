import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartistjs-4',
  templateUrl: './4.component.html',
  styleUrls: ['./4.component.scss'],
})
export class VbChartsChartistjs4Component implements OnInit {
  areaData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [[5, 9, 7, 8, 5, 3, 5, 4]],
  }
  areaOptions = {
    low: 0,
    showArea: true,
  }

  constructor() {}
  ngOnInit() {}
}
