import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartjs-4',
  templateUrl: './4.component.html',
  styleUrls: ['./4.component.scss'],
})
export class VbChartsChartjs4Component implements OnInit {
  polarData = {
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
        label: 'My dataset', // for legend
      },
    ],
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  }
  polarOptions = {
    elements: {
      arc: {
        borderColor: '#4BC0C0',
      },
    },
  }

  constructor() {}
  ngOnInit() {}
}
