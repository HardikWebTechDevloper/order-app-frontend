import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartjs-5',
  templateUrl: './5.component.html',
  styleUrls: ['./5.component.scss'],
})
export class VbChartsChartjs5Component implements OnInit {
  pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  }
  pieOptions = {}

  constructor() {}
  ngOnInit() {}
}
