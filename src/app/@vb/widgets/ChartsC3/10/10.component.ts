import { Component, AfterViewInit } from '@angular/core'
import c3 from 'c3'

@Component({
  selector: 'vb-charts-c3-10',
  templateUrl: './10.component.html',
  styleUrls: ['./10.component.scss'],
})
export class VbChartsC310Component implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    const colors = {
      primary: '#01a8fe',
      def: '#acb7bf',
      success: '#46be8a',
      danger: '#fb434a',
    }

    const zoom = c3.generate({
      bindto: '#zoom',
      data: {
        columns: [
          [
            'Sample',
            30,
            200,
            100,
            400,
            150,
            250,
            150,
            200,
            170,
            240,
            350,
            150,
            100,
            400,
            150,
            250,
            150,
            200,
            170,
            240,
            100,
            150,
            250,
            150,
            200,
            170,
            240,
            30,
            200,
            100,
            400,
            150,
            250,
            150,
            200,
            170,
            240,
            350,
            150,
            100,
            400,
            350,
            220,
            250,
            300,
            270,
            140,
            150,
            90,
            150,
            50,
            120,
            70,
            40,
          ],
        ],
        colors: {
          Sample: colors.primary,
        },
      },
      zoom: {
        enabled: !0,
      },
    })
  }
}
