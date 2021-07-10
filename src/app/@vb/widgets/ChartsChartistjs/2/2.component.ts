import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-charts-chartistjs-2',
  templateUrl: './2.component.html',
  styleUrls: ['./2.component.scss'],
})
export class VbChartsChartistjs2Component implements OnInit {
  smilData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    series: [
      [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
      [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
      [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
      [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3],
    ],
  }
  smilOptions = {
    low: 0,
  }
  smilEvents = {
    created() {},
    draw(data) {
      let seq = 0
      const delays = 80
      const durations = 500
      if (data.type === 'line') {
        seq += 1
        data.element.animate({
          opacity: {
            begin: seq * delays + 1e3,
            dur: durations,
            from: 0,
            to: 1,
          },
        })
      }
      if (data.type === 'label' && data.axis === 'x') {
        data.element.animate({
          y: {
            begin: seq * delays,
            dur: durations,
            from: data.y + 100,
            to: data.y,
            easing: 'easeOutQuart',
          },
        })
      }
      if (data.type === 'label' && data.axis === 'y') {
        data.element.animate({
          x: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 100,
            to: data.x,
            easing: 'easeOutQuart',
          },
        })
      }
      if (data.type === 'point') {
        data.element.animate({
          x1: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart',
          },
          x2: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart',
          },
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'easeOutQuart',
          },
        })
      }
      if (data.type === 'grid') {
        const pos1Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[`${data.axis.units.pos}1`] - 30,
          to: data[`${data.axis.units.pos}1`],
          easing: 'easeOutQuart',
        }
        const pos2Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[`${data.axis.units.pos}2`] - 100,
          to: data[`${data.axis.units.pos}2`],
          easing: 'easeOutQuart',
        }
        const ctAnimations = {}
        ctAnimations[`${data.axis.units.pos}1`] = pos1Animation
        ctAnimations[`${data.axis.units.pos}2`] = pos2Animation
        data.element.animate(ctAnimations)
      }
    },
  }

  constructor() {}
  ngOnInit() {}
}
