import { Component, OnInit } from '@angular/core'
const data: any = require('./data.json')

@Component({
  selector: 'vb-hidden-icons-linearicons-free',
  templateUrl: './icons-linearicons-free.component.html',
  styleUrls: ['./icons-linearicons-free.component.scss'],
})
export class VbHiddenIconsLineariconsFreeComponent implements OnInit {
  icons = data

  constructor() {}
  ngOnInit() {}
}
