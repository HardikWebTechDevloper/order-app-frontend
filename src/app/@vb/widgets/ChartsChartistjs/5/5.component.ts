import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartistjs-5',
  templateUrl: './5.component.html',
  styleUrls: ['./5.component.scss'],
})
export class VbChartsChartistjs5Component implements OnInit {
  scatterData = Array(...new Array(52))
    .map(Math.random)
    .reduce(
      (scatter, rnd, index) => {
        const data = scatter
        data.labels.push(index + 1)
        data.series.forEach(series => {
          series.push(Math.random() * 100)
        })
        return data
      },
      {
        labels: [],
        series: Array(...new Array(4)).map(() => []),
      },
    )
  scatterOptions = {
    showLine: false,
    axisX: {
      labelInterpolationFnc(value, index) {
        return index % 13 === 0 ? `W${value}` : null
      },
    },
  }
  scatterResponsiveOptions = [
    [
      'screen and (min-width: 640px)',
      {
        axisX: {
          labelInterpolationFnc(value, index) {
            return index % 4 === 0 ? `W${value}` : null
          },
        },
      },
    ],
  ]

  constructor() {}
  ngOnInit() {}
}
