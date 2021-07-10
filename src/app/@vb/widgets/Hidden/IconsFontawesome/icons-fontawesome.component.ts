import { Component, OnInit } from '@angular/core'
const data: any = require('./data.json')

@Component({
  selector: 'vb-hidden-icons-fontawesome',
  templateUrl: './icons-fontawesome.component.html',
  styleUrls: ['./icons-fontawesome.component.scss'],
})
export class VbHiddenIconsFontawesomeComponent implements OnInit {
  icons = data

  constructor() {}
  ngOnInit() {}
}
