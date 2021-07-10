import { Component, OnInit } from '@angular/core'
const data: any = require('./data.json')

@Component({
  selector: 'vb-hidden-icons-feather',
  templateUrl: './icons-feather.component.html',
  styleUrls: ['./icons-feather.component.scss'],
})
export class VbHiddenIconsFeatherComponent implements OnInit {
  icons = data

  constructor() {}
  ngOnInit() {}
}
