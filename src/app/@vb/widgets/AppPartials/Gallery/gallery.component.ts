import { Component, OnInit } from '@angular/core'
const data: any = require('./data.json')

@Component({
  selector: 'vb-app-partials-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class VbAppPartialsGalleryComponent implements OnInit {
  data = data
  constructor() {}
  ngOnInit() {}
}
