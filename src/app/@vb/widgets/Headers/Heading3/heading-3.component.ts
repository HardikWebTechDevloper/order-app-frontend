import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-heading-3',
  templateUrl: './heading-3.component.html',
  styleUrls: ['./heading-3.component.scss'],
})
export class VbHeadersHeading3Component implements OnInit {
  @Input() data: any = {
    title: 'Header with button',
    button: 'View All',
    url: '/',
  }

  constructor() {}
  ngOnInit() {}
}
