import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartistjs-11',
  templateUrl: './11.component.html',
  styleUrls: ['./11.component.scss'],
})
export class VbChartsChartistjs11Component implements OnInit {
  simplePieData = {
    series: [20, 15, 40],
  }
  simplePieOptions = {}

  constructor() {}
  ngOnInit() {}
}
