import { Component, OnInit } from '@angular/core'
const data: any = require('./data.json')

@Component({
  selector: 'vb-hidden-icons-icomoon-free',
  templateUrl: './icons-icomoon-free.component.html',
  styleUrls: ['./icons-icomoon-free.component.scss'],
})
export class VbHiddenIconsIcomoonFreeComponent implements OnInit {
  icons = data

  constructor() {}
  ngOnInit() {}
}
