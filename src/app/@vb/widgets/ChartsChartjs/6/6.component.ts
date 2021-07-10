import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartjs-6',
  templateUrl: './6.component.html',
  styleUrls: ['./6.component.scss'],
})
export class VbChartsChartjs6Component implements OnInit {
  doughnutData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  }
  doughnutOptions = {}

  constructor() {}
  ngOnInit() {}
}
